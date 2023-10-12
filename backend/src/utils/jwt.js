const jwt = require('jsonwebtoken');
const { getUser } = require('../api/v1/models/users/services');
const { hashToken } = require('./hashToken');
const { getRefreshToken } = require('../api/v1/models/refreshTokens/services');

function generateAccessToken(user) {
  return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '30m',
  });
}

async function verifyRefreshToken(token) {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET, async (err, payload) => {
    if (err) return null;

    const hashedToken = hashToken(token);
    const refToken = await getRefreshToken({
      where: {
        hashedToken
      }
    });

    if (!refToken) return null;

    if (refToken.revoked) return null;

    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (payload.exp <= currentTimestamp) return null;
    const { userId } = payload;
    const userData = await getUser({ where: { id: userId } });
    return userData;
  });
}

function generateRefreshToken(user, jti) {
  return jwt.sign({
    userId: user.id,
    jti
  }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '48h',
  });
}

function generateTokens(user, jti) {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user, jti);

  return {
    accessToken,
    refreshToken,
  };
}

module.exports = {
  generateAccessToken,
  verifyRefreshToken,
  generateRefreshToken,
  generateTokens
};
