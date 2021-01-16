const controller = require('./UserApiController')

module.exports.use = function(koaRouter) {
    const apiRoute = new koaRouter({
        prefix: '/api/v1/users'
    });

    apiRoute.get('/index', controller.index.bind(controller))
    return apiRoute.routes();
}
