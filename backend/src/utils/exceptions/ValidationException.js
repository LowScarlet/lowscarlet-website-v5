function ValidationException(errors) {
  this.status = 400;
  this.message = 'utils.exceptions.validation-exception';
  this.errors = errors;
}

function InvalidCredentials() {
  this.status = 401;
  this.message = 'utils.exceptions.invalid-credentials';
}

module.exports = {
  ValidationException,
  InvalidCredentials
};
