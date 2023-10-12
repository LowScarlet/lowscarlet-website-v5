const express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const { v4: uuidv4 } = require('uuid');
const { ValidationException, InvalidCredentials } = require('../../../../utils/exceptions/ValidationException');
const { generateTokens, verifyRefreshToken, generateAccessToken } = require('../../../../utils/jwt');
const { createUser, getUser } = require('../../models/users/services');
const { createRefreshToken, updateRefreshToken } = require('../../models/refreshTokens/services');
const { AuthLoginValidator, AuthRegisterValidator, AuthVerifyValidator, AuthRevokeValidator } = require('../../models/refreshTokens/validators');
const { isNotAuthenticated, isAuthenticated } = require('../../models/refreshTokens/middlewares');
const { hashToken } = require('../../../../utils/hashToken');

const router = express.Router();

router.post('/login', [
  isNotAuthenticated,
  AuthLoginValidator()
], async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return next(new ValidationException(result.array()));
    }

    const jti = uuidv4();

    const user = await getUser({ where: { username } });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return next(new InvalidCredentials());
    }

    const { accessToken, refreshToken } = generateTokens(user, jti);
    await createRefreshToken({ data: { id: jti, hashedToken: refreshToken, userId: user.id } });

    res.json({
      message: req.t('validations.success-login'),
      accessToken,
      refreshToken
    });
  } catch (err) {
    next(err);
  }
  return null;
});

router.post('/register', [
  isNotAuthenticated,
  AuthRegisterValidator()
], async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return next(new ValidationException(result.array()));
    }

    const jti = uuidv4();

    const user = await createUser({
      data: {
        username,
        password,
        role: 'MEMBER',
        userProfile: { create: {} },
      }
    });

    const { accessToken, refreshToken } = generateTokens(user, jti);
    await createRefreshToken({ data: { id: jti, hashedToken: refreshToken, userId: user.id } });

    res.json({
      message: req.t('validations.success-register'),
      accessToken,
      refreshToken
    });
  } catch (err) {
    next(err);
  }
  return null;
});

router.post('/verify', [
  isNotAuthenticated,
  AuthVerifyValidator()
], async (req, res, next) => {
  const { hashedToken } = req.body;
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return next(new ValidationException(result.array()));
    }

    const user = await verifyRefreshToken(hashedToken);

    const accessToken = generateAccessToken(user);

    res.json({
      accessToken,
      refreshToken: hashedToken
    });
  } catch (err) {
    next(err);
  }
  return null;
});

router.post('/revoke', [
  isAuthenticated,
  AuthRevokeValidator()
], async (req, res, next) => {
  const { hashedToken } = req.body;
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return next(new ValidationException(result.array()));
    }

    const token = hashToken(hashedToken);

    await updateRefreshToken({
      where: { hashedToken: token },
      data: {
        revoked: true
      }
    });

    res.json({
      message: req.t('validations.success-logout'),
    });
  } catch (err) {
    next(err);
  }
  return null;
});

module.exports = router;
