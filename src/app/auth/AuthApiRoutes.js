const controller = require('./AuthApiController')

module.exports.use = function(koaRouter) {
    const apiRoute = new koaRouter({
        prefix: '/api/v1/auth'
    });

    apiRoute.post('/authenticate', controller.authenticate.bind(controller))
    apiRoute.post('/logout', controller.logout.bind(controller))
    apiRoute.post('/change-password', controller.changePassword(controller))
    return apiRoute.routes();
}
