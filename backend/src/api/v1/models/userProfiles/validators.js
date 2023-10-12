const { param, body } = require('express-validator');
const { getUserProfile } = require('./services');

function GetUserProfileValidator() {
  return [
    param('id')
      .custom(async (id) => {
        if (id != null) {
          const data = await getUserProfile({
            where: { id: parseInt(id, 10) }
          });
          if (!data) throw new Error('validations.data-not-found');
        }
      })
  ];
}

function UpdateUserProfileValidator() {
  return [
    body('firstName')
      .notEmpty()
      .withMessage('validations.value-is-empty')
      .optional(),
    body('lastName')
      .notEmpty()
      .withMessage('validations.value-is-empty')
      .optional(),
    body('bio')
      .notEmpty()
      .withMessage('validations.value-is-empty')
      .optional(),
    body('gender')
      .notEmpty()
      .withMessage('validations.value-is-empty')
      .optional(),
  ];
}

function CreateUserProfileValidator() {
  return [
    body('id_name')
      .custom(async (id_name) => {
        if (id_name != null) {
          const user = await getUserProfile({ where: { id_name } });
          if (user) throw new Error('validations.already-exist');
        }
      })
      .matches(/^[a-zA-Z0-9_]+$/)
      .withMessage('validations.only-alphanumeric-and-underscore')
      .notEmpty()
      .withMessage('validations.value-is-empty'),
    body('name')
      .notEmpty()
      .withMessage('validations.value-is-empty'),
    body('level')
      .notEmpty()
      .withMessage('validations.value-is-empty'),
    body('description')
      .notEmpty()
      .withMessage('validations.value-is-empty'),
  ];
}

module.exports = {
  GetUserProfileValidator,
  CreateUserProfileValidator,
  UpdateUserProfileValidator
};
