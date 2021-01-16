const controller = require('./AdsApiController')

module.exports.use = function(koaRouter) {
    const apiRoute = new koaRouter({
        prefix: '/api/v1/ads'
    });

    apiRoute.get('/index', controller.index.bind(controller))
    apiRoute.post('/upload', controller.ads_uploads.bind(controller))
    apiRoute.delete('/:id', controller.delete.bind(controller))
    return apiRoute.routes();
}
