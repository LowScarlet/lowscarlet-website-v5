const express = require('express');

const admin = require('./routes/admin');
const auth = require('./routes/auth/routes');
const client = require('./routes/client');
const { getUsers, createUser } = require('./models/users/services');
const { getRoles, createRoles } = require('./models/roles/services');
const { getBadges, createBadges } = require('./models/badges/services');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: req.t('welcome-messages.home-api-v1')
  });
});

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  let users = await getUsers({
    skip: 0,
    take: 10
  });
  let roles = await getRoles({
    skip: 0,
    take: 10
  });
  let badges = await getBadges({
    skip: 0,
    take: 10
  });
  if (roles.length <= 0) {
    await createRoles({
      data: [
        {
          icon: 'owner.png',
          id_name: 'owner',
          name: 'Owner',
          level: -1,
        },
        {
          id_name: 'admin',
          name: 'Administrator',
          level: 0,
        },
        {
          id_name: 'member',
          name: 'Member',
          level: 9,
        },
        {
          id_name: 'guest',
          name: 'Guest',
          level: 10,
        },
      ]
    });
    roles = await getRoles({});
  }
  if (badges.length <= 0) {
    await createBadges({
      data: [
        {
          icon: 'beta_tester.png',
          id_name: 'beta_tester',
          name: 'Beta Tester',
          level: 0,
        },
      ]
    });
    badges = await getBadges({});
  }
  if (users.length <= 0) {
    await createUser({
      data: {
        username: username || 'admin',
        email: 'admin@admin.com',
        password: password || 'admin',
        role: { connect: { id_name: 'admin' } },
        userProfile: { create: {} },
        economy: { create: {} },
        badges: { connect: [{ id_name: 'beta_tester' }] }
      }
    });
    users = await getUsers({});
  }
  return res.json({
    message: 'Seed Added!'
  });
});

router.use('/auth', auth);
router.use('/admin', admin);
router.use('/client', client);

module.exports = router;
