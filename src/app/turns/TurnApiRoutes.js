const turnApiController = require('./TurnApiController')

module.exports.use = function(koaRouter) {
    const apiRoute = new koaRouter({
        prefix: '/api/v1/turns'
    });

    apiRoute.get('/get', turnApiController.index.bind(turnApiController))
    apiRoute.get('/today', turnApiController.get_today_turns.bind(turnApiController))
    apiRoute.get('/range', turnApiController.get_range_turns.bind(turnApiController))
    apiRoute.get('/group_day_month_year', turnApiController.get_range_group_by_status_day_month_year.bind(turnApiController))
    apiRoute.get('/group_month_year', turnApiController.get_range_group_by_status_month_year.bind(turnApiController))
    apiRoute.get('/group_year', turnApiController.get_range_group_by_status_year.bind(turnApiController))

    apiRoute.get('/operators/served/today', turnApiController.get_today_operator_served_count.bind(turnApiController))
    apiRoute.get('/services/served/today', turnApiController.get_today_service_served_count.bind(turnApiController))

    apiRoute.get('/operators/served/range', turnApiController.get_range_operator_served_count.bind(turnApiController))
    apiRoute.get('/services/served/range', turnApiController.get_range_service_served_count.bind(turnApiController))
    return apiRoute.routes();
}
