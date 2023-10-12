const { db } = require('../../../../utils/database');

const table = db.userProfile;

async function createUserProfiles(props) {
  return table.createMany(props);
}

async function createUserProfile(props) {
  return table.create(props);
}

function getUserProfiles(props) {
  const { where, skip, take } = props;
  const data = {
    take: 15,
    where,
  };
  if (skip) data.skip = parseInt(skip, 10);
  if (take) data.take = parseInt(take, 10);
  return table.findMany(data);
}

function getUserProfile(props) {
  return table.findUnique(props);
}

async function updateUserProfile(props) {
  return table.update(props);
}

function deleteUserProfiles(props) {
  return table.deleteMany(props);
}

function deleteUserProfile(props) {
  return table.delete(props);
}

module.exports = {
  createUserProfiles,
  createUserProfile,

  getUserProfiles,
  getUserProfile,

  updateUserProfile,

  deleteUserProfiles,
  deleteUserProfile,
};
