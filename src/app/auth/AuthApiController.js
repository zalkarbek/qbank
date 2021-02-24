const Controller = require('../Controller');
const service = require('../../services/')
const authService = service.getService('auth')
const userService = service.getService('user')

class AuthApiController extends Controller {
    async authenticate(ctx, next) {
        const { login, password } = ctx.request.body;
        const user = await authService.userAuthenticate({ login, password: String(password) });
        if (!user) {
            return ctx.body = {
                error: true,
                message: 'auth.fail'
            };
        }

        const token = await authService.userGetToken(user);
        return ctx.body = {
            error: false,
            message: 'Authorization success',
            token,
            user: {
                id: user.id,
                name: user.name,
                login: user.login,
                roles: user.roles
            }
        };
    }
    async register(ctx, next) {

    }

    async logout(ctx, next) {
        const request = ctx.request
        const id = request.params.id || request.body.id
        const deleted = await userService.userAccessTokenDelete(id)
        ctx.body = {
            success: Boolean(deleted),
            message: 'Token deleted',
            deleted
        }
    }

    async changePassword(ctx, next) {

    }
}

module.exports = new AuthApiController();
