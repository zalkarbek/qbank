const Controller = require('../Controller');

class AuthApiController extends Controller {
    async authenticate(ctx, next) {}
    async logout(ctx, next) {}
    async changePassword(ctx, next) {}
}

module.exports = new AuthApiController();
