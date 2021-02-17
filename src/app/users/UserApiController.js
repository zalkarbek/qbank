const Controller = require('../Controller');
const service = require('../../services/')
const authService = service.getService('auth')
const userService = service.getService('user')

class UserApiController extends Controller {
    async index(ctx, next) {
        const service = this.getService('user')
        ctx.body = await service.getUsers()
    }

    async createUser(ctx, next) {
        const req = ctx.request
        const { name_u, login, password } = req.body;
        const user = await userService.createUser({ name_u, login, password });
        const token = await authService.userGetToken(user);

        return ctx.body = {
            message: 'create user success',
            data: {
                user,
                token
            }
        };
    }

    async userSetRole(ctx, next) {
        const req = ctx.request
        const id = req.body.id || req.params.id;
        const roles = req.body.roles;
        const added = await userService.setRoles(id, roles);
        return res.json(rest.responseWith({
            unit: 'roles.many',
            message: 'add.success.many',
            data: added
        }));
    }
}

module.exports = new UserApiController();
