const Controller = require('../Controller');

class TerminalApiController extends Controller {
    async index(ctx, next) {
        const turnService = this.getService('turn')
        ctx.body = await turnService.getTurns()
    }

    // получить сегодняшние очереди
    async get_today_turns(ctx, next) {
        const turnService = this.getService('turn')
        ctx.body = await turnService.getTodayTurns()
    }

    // получить диапазон очередей
    async get_range_turns(ctx, next) {
        const startDate = ctx.request.body.startDate
            || ctx.request.query.startDate
            || new Date()
        const endDate = ctx.request.body.endDate
            || ctx.request.query.endDate
            || new Date()
        const turnService = this.getService('turn')
        ctx.body = await turnService.getTurnsRange(startDate, endDate)
    }

    // получить
    async get_today_operator_served_count(ctx, next) {
        const turnService = this.getService('turn')
        ctx.body = await turnService.getTodayOperatorServedCount()
    }

    async get_today_service_served_count(ctx, next) {
        const turnService = this.getService('turn')
        ctx.body = await turnService.getTodayServiceServedCount()
    }

    async get_range_operator_served_count(ctx, next) {
        const startDate = ctx.request.body.startDate
            || ctx.request.query.startDate
            || new Date()
        const endDate = ctx.request.body.endDate
            || ctx.request.query.endDate
            || new Date()
        const turnService = this.getService('turn')
        ctx.body = await turnService.getRangeOperatorServedCount(startDate, endDate)
    }

    async get_range_service_served_count(ctx, next) {
        const startDate = ctx.request.body.startDate
            || ctx.request.query.startDate
            || new Date()
        const endDate = ctx.request.body.endDate
            || ctx.request.query.endDate
            || new Date()
        const turnService = this.getService('turn')
        ctx.body = await turnService.getRangeServiceServedCount(startDate, endDate)
    }

    async get_range_group_by_status_day_month_year(ctx, next) {
        const startDate = ctx.request.body.startDate
            || ctx.request.query.startDate
            || new Date()
        const endDate = ctx.request.body.endDate
            || ctx.request.query.endDate
            || new Date()

        const service = this.getService('turn')
        ctx.body = await service.getTurnsGroupByStatusYearMonthDay(startDate, endDate)
    }

    async get_range_group_by_status_month_year(ctx, next) {
        const startDate = ctx.request.body.startDate
            || ctx.request.query.startDate
            || new Date()
        const endDate = ctx.request.body.endDate
            || ctx.request.query.endDate
            || new Date()
        const service = this.getService('turn')
        ctx.body = await service.getTurnsGroupByStatusYearMonth(startDate, endDate)
    }

    async get_range_group_by_status_year(ctx, next) {
        const startDate = ctx.request.body.startDate
            || ctx.request.query.startDate
            || new Date()
        const endDate = ctx.request.body.endDate
            || ctx.request.query.endDate
            || new Date()
        const service = this.getService('turn')
        ctx.body = await service.getTurnsGroupByStatusYear(startDate, endDate)
    }
}

module.exports = new TerminalApiController();
