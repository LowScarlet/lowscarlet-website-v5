const { body } = require('express-validator');
const i18next = require('i18next');
const { getUser } = require('../users/services');
const { verifyRefreshToken } = require('../../../../utils/jwt');
const { getRefreshToken } = require('./services');
const { hashToken } = require('../../../../utils/hashToken');

function AuthRegisterValidator() {
  return [
    body('username')
      .custom(async (username) => {
        if (username != null) {
          const user = await getUser({ where: { username } });
          if (user) throw new Error('validations.already-exist');
        }
      })
      .isLength({ min: 6, max: 24 })
      .withMessage(() => i18next.t('validations.require-length-min-max', { min: 6, max: 24 }))
      .matches(/^[a-zA-Z][a-zA-Z0-9_]*$/)
      .withMessage('validations.only-alphanumeric-and-underscore')
      .notEmpty()
      .withMessage('validations.value-is-empty'),
    body('email')
      .custom(async (email) => {
        if (email != null) {
          const user = await getUser({ where: { email } });
          if (user) throw new Error('validations.already-exist');
        }
      })
      .isEmail()
      .withMessage('validations.invalid-type')
      .notEmpty()
      .withMessage('validations.value-is-empty'),
    body('password')
      .isLength({ min: 6, max: 128 })
      .withMessage(() => i18next.t('validations.require-length-min-max', { min: 6, max: 128 }))
      .notEmpty()
      .withMessage('validations.value-is-empty'),
  ];
}

function AuthLoginValidator() {
  return [
    body('username')
      .custom(async (username) => {
        if (username != null) {
          const user = await getUser({ where: { username } });
          if (!user) throw new Error('validations.data-not-found');
        }
      })
      .notEmpty()
      .withMessage('validations.value-is-empty'),
    body('password')
      .notEmpty()
      .withMessage('validations.value-is-empty'),
  ];
}

function AuthVerifyValidator() {
  return [
    body('hashedToken')
      .custom(async (hashedToken) => {
        if (hashedToken != null) {
          const user = await verifyRefreshToken(hashedToken);
          if (!user) throw new Error('validations.data-not-found');
        }
      })
  ];
}

function AuthRevokeValidator() {
  return [
    body('hashedToken')
      .custom(async (hashedToken) => {
        if (hashedToken != null) {
          const token = hashToken(hashedToken);
          const refToken = await getRefreshToken({
            where: {
              hashedToken: token
            }
          });
          if (!refToken) throw new Error('validations.data-not-found');
        }
      })
  ];
}

module.exports = {
  AuthRegisterValidator,
  AuthLoginValidator,
  AuthVerifyValidator,
  AuthRevokeValidator
};
