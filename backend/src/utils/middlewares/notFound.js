/* eslint-disable no-unused-vars */
function NotFoundException() {
  this.status = 400;
  this.message = 'utils.middlewares.not-found';
}

module.exports = (req, res, next) => {
  throw new NotFoundException();
};
