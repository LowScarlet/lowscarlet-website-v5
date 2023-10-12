const { db } = require('../../../../utils/database');
const hashPassword = require('../../../../utils/hashPassword');

const table = db.user;

async function createUsers(props) {
  return table.createMany(props);
}

async function createUser(props) {
  if (props.data.password) props.data.password = hashPassword(props.data.password);
  return table.create(props);
}

function getUsers(props) {
  const { take } = props;
  if (!take) props.take = 15;
  return table.findMany(props);
}

function getUser(props) {
  return table.findUnique(props);
}

async function updateUser(props) {
  if (props.data.password) props.data.password = hashPassword(props.data.password);
  return table.update(props);
}

function deleteUsers(props) {
  return table.deleteMany(props);
}

function deleteUser(props) {
  return table.delete(props);
}

module.exports = {
  createUsers,
  createUser,

  getUsers,
  getUser,

  updateUser,

  deleteUsers,
  deleteUser,
};
