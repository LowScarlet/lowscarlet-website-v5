const { db } = require('../../../../utils/database');
const { hashToken } = require('../../../../utils/hashToken');

const table = db.refreshToken;

async function createRefreshTokens(props) {
  return table.createMany(props);
}

function createRefreshToken(props) {
  if (props.data.hashedToken) props.data.hashedToken = hashToken(props.data.hashedToken);
  return table.create(props);
}

function getRefreshTokens(props) {
  const { take } = props;
  if (!take) props.take = 15;
  return table.findMany(props);
}

function getRefreshToken(props) {
  return table.findUnique(props);
}

function updateRefreshToken(props) {
  return table.update(props);
}

function deleteRefreshTokens(props) {
  return table.delete(props);
}

function deleteRefreshToken(props) {
  return table.deleteMany(props);
}

module.exports = {
  createRefreshTokens,
  createRefreshToken,

  getRefreshTokens,
  getRefreshToken,

  updateRefreshToken,

  deleteRefreshTokens,
  deleteRefreshToken,
};
