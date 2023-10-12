const jwt = require('jsonwebtoken');
const { UnAuthorizedUserException, AuthorizedUserException } = require('./exceptions');

function checkPayload(req, res, next) {
  if (process.env.DEV_MODE === 'true') return next();
  const { authorization } = req.headers;

  if (!authorization) {
    return next();
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.payload = payload;
  } catch (err) { /* empty */ }

  return next();
}

function isAuthenticated(req, res, next) {
  if (process.env.DEV_MODE === 'true') return next();
  const { authorization } = req.headers;

  if (!authorization) {
    throw new UnAuthorizedUserException();
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.payload = payload;
  } catch (err) {
    res.status(401);
    throw new UnAuthorizedUserException();
  }

  return next();
}

function isNotAuthenticated(req, res, next) {
  if (process.env.DEV_MODE === 'true') return next();
  const { authorization } = req.headers;

  if (authorization) {
    throw new AuthorizedUserException();
  }

  try {
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    throw new AuthorizedUserException();
  } catch (err) { /* empty */ }

  return next();
}

module.exports = {
  checkPayload,
  isAuthenticated,
  isNotAuthenticated,
};
