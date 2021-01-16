const controller = require('./TvTablosController')

module.exports.use = function(koaRouter) {
    const apiRoute = new koaRouter({
        prefix: '/api/v1/tvtablos'
    });

    apiRoute.get('/index', controller.index.bind(controller))
    apiRoute.post('/save', controller.save_or_update.bind(controller))
    return apiRoute.routes();
}
