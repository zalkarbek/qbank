const terminalApiController = require('./TerminalApiController')

module.exports.use = function(koaRouter) {
    const apiRoute = new koaRouter({
        prefix: '/api/v1/terminal'
    });

    apiRoute.get('/department-address-lists', terminalApiController.getDepartmentAdderss.bind(terminalApiController))
    apiRoute.post('/department-address-change', terminalApiController.setDepartmentDB.bind(terminalApiController))

    return apiRoute.routes();
}
