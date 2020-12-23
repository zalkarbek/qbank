const terminalApiController = require('./TerminalApiController')

module.exports.use = function(koaRouter) {
    const apiRoute = new koaRouter({
        prefix: 'api/v1/terminal'
    });

    return apiRoute.routes();
}
