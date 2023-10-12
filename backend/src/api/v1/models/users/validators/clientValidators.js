const { body, param } = require('express-validator');
const i18next = require('i18next');
const { getUser } = require('../services');

function GetUserValidator() {
  return [
    param('username')
      .custom(async (username) => {
        if (username != null) {
          const user = await getUser({ where: { username } });
          if (!user) throw new Error('validations.user_not_found');
        }
      })
  ];
}

function UpdateUserValidator() {
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
      .matches(/^[a-zA-Z0-9_]+$/)
      .withMessage('validations.only-alphanumeric-and-underscore')
      .notEmpty()
      .withMessage('validations.value-is-empty')
      .optional(),
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
      .withMessage('validations.value-is-empty')
      .optional(),
    body('password')
      .isStrongPassword()
      .withMessage('validations.password-is-not-strong')
      .notEmpty()
      .withMessage('validations.value-is-empty')
      .optional(),
  ];
}

function UpdateUserPasswordValidator() {
  return [
    body('currentPassword')
      .notEmpty()
      .withMessage('validations.value-is-empty'),
    body('newPassword')
      .isLength({ min: 6, max: 128 })
      .withMessage(() => i18next.t('validations.require-length-min-max', { min: 6, max: 128 }))
      .notEmpty()
      .withMessage('validations.value-is-empty'),
  ];
}

module.exports = {
  GetUserValidator,
  UpdateUserValidator,
  UpdateUserPasswordValidator,
};