function sendRefreshToken(res, token) {
  res.cookie('refreshToken', token, {
    httpOnly: true,
    sameSite: true,
    path: '/api/v1/auth',
  });
}

module.exports = { sendRefreshToken };
