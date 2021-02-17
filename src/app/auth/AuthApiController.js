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
                name_u: user.name_u,
                login: user.login,
                roles: user.roles
            }
        };
    }
    async register(ctx, next) {

    }

    async logout(ctx, next) {

    }

    async changePassword(ctx, next) {

    }
}

module.exports = new AuthApiController();
