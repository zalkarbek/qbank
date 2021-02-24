const controller = require('./UserApiController')

module.exports.use = function(koaRouter) {
    const apiRoute = new koaRouter({
        prefix: '/api/v1/users'
    });

    apiRoute.get('/index', controller.index.bind(controller))
    apiRoute.get('/web/:id', controller.id.bind(controller))
    apiRoute.post('/create-user', controller.createUser.bind(controller))
    apiRoute.post('/set-roles', controller.userSetRole.bind(controller))
    return apiRoute.routes();
}
