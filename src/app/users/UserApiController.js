const Controller = require('../Controller');
const service = require('../../services/')
const authService = service.getService('auth')
const userService = service.getService('user')

class UserApiController extends Controller {
    async index(ctx, next) {
        const service = this.getService('user')
        ctx.body = await service.getUsers()
    }

    async id(ctx, next) {
        const id = ctx.request.params.id
        const user = await userService.getUserById(id)
        ctx.body = { user }
    }

    async createUser(ctx, next) {
        const req = ctx.request
        const { name, login, password } = req.body;
        const user = await userService.createUser({ name, login, password });
        // const token = await authService.userGetToken(user);

        ctx.body = {
            message: 'create user success',
            data: { user }
        };
    }

    async userSetRole(ctx, next) {
        const req = ctx.request
        const id = req.body.id || req.params.id;
        const roles = req.body.roles;
        const added = await userService.setRoles(id, roles);
        ctx.body = {
            message: 'Роли изменены',
            data: added
        };
    }
}

module.exports = new UserApiController();
