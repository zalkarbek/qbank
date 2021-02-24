const service = require('../service');
const authService = service.getService('auth');

module.exports = (roles) => {
  return async (ctx, next) => {
    const userRoles = ctx.request.userRoles;
    const checkedAccessRoles = await authService.checkAccessRole(userRoles, roles);
    if(checkedAccessRoles >= 1) {
      next();
    }
    else {
      let error = new Error('Access error');
      error.data = { type: 'user_access_denied', message: 'Access is denied' };
      return next(error);
    }
  };
};
