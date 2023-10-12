const { body, check } = require('express-validator');
const i18next = require('i18next');

function UpdateUserProfileValidator() {
  return [
    check('avatar')
      .custom((value, { req }) => {
        if (!req.file) {
          return true;
        }
        if (!req.file.mimetype.startsWith('image')) {
          throw new Error('Only image files are allowed.');
        }
        if (req.file.size > 2 * 1024 * 1024) {
          throw new Error('File size exceeds the limit.');
        }
        return true;
      }),
    body('firstName')
      .isLength({ min: 3, max: 12 })
      .withMessage(() => i18next.t('validations.require-length-min-max', { min: 3, max: 12 }))
      .notEmpty()
      .withMessage('validations.value-is-empty')
      .optional(),
    body('lastName')
      .isLength({ min: 3, max: 12 })
      .withMessage(() => i18next.t('validations.require-length-min-max', { min: 3, max: 12 }))
      .notEmpty()
      .withMessage('validations.value-is-empty')
      .optional(),
    body('bio')
      .isLength({ min: 0, max: 128 })
      .withMessage(() => i18next.t('validations.require-length-min-max', { min: 0, max: 128 }))
      .optional(),
    body('gender')
      .notEmpty()
      .withMessage('validations.value-is-empty')
      .optional(),
  ];
}

module.exports = {
  UpdateUserProfileValidator,
};
