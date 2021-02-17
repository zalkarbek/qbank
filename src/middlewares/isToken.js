const tokenGenerator = require('../helpers/token-generator');
const service = require('../services');
const authService = service.getService('auth');

module.exports = async (ctx, next) => {
  const req = ctx.request
  // проверка токена
  let token = req.headers['x-access-token'] || req.headers['authorization'] || req.headers['Authorization'];

  if(token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  token = token || req.query.token || req.body.token || '';

  if(token) {
    try {
      const payload = await tokenGenerator.jwtVerify(token);
      const user = await authService.getUserByLogin(payload.login);

      if(!user && !user.login) {
        let error = new Error('Authentication Error');
        error.data = { type: 'user_not_found', message: 'User not found' };
        return next(error);
      }

      if(user.access_token === payload.access_token) {
        req.payload = payload;
        req.userRoles = user.roles;
        return next();
      }

      let error = new Error('Authentication Error');
      error.data = { type: 'auth_error_token_expired', message: 'Token is expired' };
      return next(error);

    } catch (e) {
      let error = new Error('Authentication Error');
      error.data = { type: 'auth_error', message: e.message };
      return next(error);
    }
  } else {
    let error = new Error('Authentication Error');
    error.data = { type: 'auth_error_token_not_found', message: 'Token not found' };
    return next(error);
  }
};
