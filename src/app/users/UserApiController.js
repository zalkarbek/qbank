const Controller = require('../Controller');

class UserApiController extends Controller {
    async index(ctx, next) {
        const service = this.getService('user')
        ctx.body = await service.getUsers()
    }
}

module.exports = new UserApiController();
