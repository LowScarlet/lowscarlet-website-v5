function ForbiddenException() {
  this.status = 403;
  this.message = 'utils.exceptions.forbidden';
}

function UnAuthorizedUserException() {
  this.status = 401;
  this.message = 'utils.exceptions.must-unauthorized-user';
}

function AuthorizedUserException() {
  this.status = 403;
  this.message = 'utils.exceptions.must-authorized-user';
}

module.exports = {
  ForbiddenException,
  UnAuthorizedUserException,
  AuthorizedUserException,
};
