const BaseService = require('./BaseService');

class TurnService extends BaseService {
    // Получить список очередей
    async getTurns() {
        return this._db
            .select('*')
            .from('turns')
            .limit(100)
    }

    // получить список очередей в диапазоне (startDate = начальная дата, endDate = конечная дата)
    async getTurnsRange(startDate, endDate) {
        const query = this.getTurnQueryBuilder()
        return query
            .whereRaw('DATE(turns.created_at) BETWEEN DATE(?) AND DATE(?)', [startDate, endDate])
    }

    // сколько людей обслужил данный оператор (startDate = начальная дата, endDate = конечная дата)
    async getRangeOperatorServedCount(startDate, endDate) {
        return this._db
            .select(
                'users.id AS user_id'
                ,'users.name_u AS user_name'
                , 'turns.status AS turn_status'
            )
            .from('users')
            .innerJoin('turns', 'users.id', '=', 'turns.user_id')
            .whereRaw(
                'TIME_TO_SEC(TIMEDIFF(turns.updated_at, turns.created_at)) > 10 ' +
                'AND DATE(turns.created_at) BETWEEN DATE(?) AND DATE(?)',
                [startDate, endDate]
            )
            .groupBy('user_id', 'user_name', 'turn_status')
            .count('*', { as: 'counted' })
    }

    // сколько людей пришло по данной услуге (startDate = начальная дата, endDate = конечная дата)
    async getRangeServiceServedCount(startDate, endDate) {
        return this._db
            .select(
                'services.name AS service_name'
                , 'turns.status AS turn_status'
            )
            .from('services')
            .rightJoin('turns', 'services.id', '=', 'turns.service_id')
            .whereRaw(
                'DATE(turns.created_at) BETWEEN DATE(?) AND DATE(?)'
                , [startDate, endDate]
            )
            .groupBy('service_name', 'turn_status')
            .count('*', { as: 'counted' })
    }

    // сколько людей обслужил оператор за сегодня
    async getTodayOperatorServedCount() {
        return this._db
            .select(
                'users.id AS user_id'
            ,'users.name_u AS user_name'
            , 'turns.status AS turn_status'
            )
            .from('users')
            .innerJoin('turns', 'users.id', '=', 'turns.user_id')
            .whereRaw(
                'TIME_TO_SEC(TIMEDIFF(turns.updated_at, turns.created_at)) > 10 ' +
                'AND YEAR(turns.created_at) = YEAR(NOW()) ' +
                'AND MONTH(turns.created_at) = MONTH(NOW()) ' +
                'AND DAY(turns.created_at) = DAY(NOW())'
            )
            .groupBy('user_id', 'user_name', 'turn_status')
            .count('*', { as: 'counted' })
    }

    // сколько людей пришло по данной услуге за сегодня
    async getTodayServiceServedCount() {
        return this._db
            .select(
                'services.name AS service_name'
                , 'turns.status AS turn_status'
            )
            .from('services')
            .rightJoin('turns', 'services.id', '=', 'turns.service_id')
            .whereRaw(
                'YEAR(turns.created_at) = YEAR(NOW()) ' +
                'AND MONTH(turns.created_at) = MONTH(NOW()) ' +
                'AND DAY(turns.created_at) = DAY(NOW())'
            )
            .groupBy('service_name', 'turn_status')
            .count('*', { as: 'counted' })
    }

    // сколько людей пришло за сегодня
    async getTodayTurns() {
        const query = this.getTurnQueryBuilder()
        return query
            .whereRaw(
                'YEAR(turns.created_at) = YEAR(NOW()) ' +
                'AND MONTH(turns.created_at) = MONTH(NOW()) ' +
                'AND DAY(turns.created_at) = DAY(NOW())'
            )
    }

    // получить список очередей с группировкой по статусу по году по месяцу по дню
    async getTurnsGroupByStatusYearMonthDay(startDate, endDate) {
        return this._db
            .column(this._db.raw(
                'turns.status AS turn_status' +
            ', DAY(turns.created_at) AS turn_day' +
            ', DATE_FORMAT(turns.created_at, \'%m\') AS turn_month' +
            ', YEAR(turns.created_at) AS turn_year'
            ))
            .from('users')
            .innerJoin('turns', 'users.id', '=', 'turns.user_id')
            .leftJoin('position', 'position.id', '=' ,'users.position_id')
            .leftJoin('services', 'services.id', '=', 'turns.service_id')
            .whereRaw(
                'DATE(turns.created_at) BETWEEN DATE(?) AND DATE(?)'
                , [startDate, endDate]
            )
            .groupByRaw(
                'turn_status' +
                ', YEAR(turns.created_at)' +
                ', DATE_FORMAT(turns.created_at, \'%m\')' +
                ', DAY(turns.created_at)'
            )
            .count('*', { as: 'counted' })
    }

    // получить список очередей с группировкой по статусу по году по месяцу
    async getTurnsGroupByStatusYearMonth(startDate, endDate) {
        return this._db
            .select(this._db.raw(
                'turns.status AS turn_status' +
                ', DATE_FORMAT(turns.created_at, \'%m\') AS turn_month' +
                ', YEAR(turns.created_at) AS turn_year'
            ))
            .from('users')
            .innerJoin('turns', 'users.id', '=', 'turns.user_id')
            .leftJoin('position', 'position.id', '=' ,'users.position_id')
            .leftJoin('services', 'services.id', '=', 'turns.service_id')
            .whereRaw(
                'DATE(turns.created_at) BETWEEN DATE(?) AND DATE(?)'
                , [startDate, endDate]
            )
            .groupByRaw(
                'turn_status' +
                ', DATE_FORMAT(turns.created_at, \'%m\')' +
                ', YEAR(turns.created_at)'
            )
            .count('*', { as: 'counted' })
    }

    // получить список очередей с группировкой по статусу по году
    async getTurnsGroupByStatusYear(startDate, endDate) {
        return this._db
            .select(this._db.raw(
                'turns.status AS turn_status' +
                ', YEAR(turns.created_at) AS turn_year'
            ))
            .from('users')
            .innerJoin('turns', 'users.id', '=', 'turns.user_id')
            .leftJoin('position', 'position.id', '=' ,'users.position_id')
            .leftJoin('services', 'services.id', '=', 'turns.service_id')
            .whereRaw(
                'DATE(turns.created_at) BETWEEN DATE(?) AND DATE(?)'
                , [startDate, endDate]
            )
            .groupByRaw('turn_status, YEAR(turns.created_at)')
            .count('*', { as: 'counted' })
    }

    // конструктор базовой запроса
    getTurnQueryBuilder() {
        return this._db
            .select(
                'users.id AS user_id'
                , 'users.name_u AS user_name'
                , 'position.id AS position_id'
                , 'position.name_p AS position_name'
                , 'turns.id AS turn_id'
                , 'turns.status AS turn_status'
                , 'turns.nomer AS turn_nomer'
                , 'services.id AS service_id'
                , 'services.name AS service_name'
                , 'services.suffix AS suffix'
                , 'turns.created_at AS turn_created_at'
                , 'turns.updated_at AS turn_updated_at'
                , 'turns.came_from AS turn_came_from_user_id'
                , 'turns.this_way AS turn_this_way_user_id'
            )
            .from('users')
            .innerJoin('turns', 'users.id', '=', 'turns.user_id')
            .leftJoin('position', 'position.id', '=' ,'users.position_id')
            .leftJoin('services', 'services.id', '=', 'turns.service_id')
    }

    // получить список очередей с учетом времени ожидании клиента и время обслуживания оператора
    getTurnWithServedWaitTimeQueryBuilder() {
        return this._db
            .select(
            'users.id AS user_id'
                , 'users.name_u AS user_name'
                , 'position.id AS position_id'
                , 'position.name_p AS position_name'
                , 'turns.id AS turn_id'
                , 'turns.status AS turn_status'
                , 'turns.nomer AS turn_nomer'
                , 'services.id AS service_id'
                , 'services.name AS service_name'
                , 'services.suffix AS suffix'
                , 'turns.created_at AS turn_created_at'
                , 'turns.updated_at AS turn_updated_at'
                , 'turns_service_times.created_at AS turn_service_time_start'
                , 'turns_service_times.finished_at AS turn_service_time_finish'
                , 'turns_waiting_times.created_at AS turn_wait_start'
                , 'turns_waiting_times.finished_at AS turn_wait_finish'
                , 'turns.came_from AS turn_came_from_user_id'
                , 'turns.this_way AS turn_this_way_user_id'
            )
            .from('users')
            .innerJoin('turns', 'users.id', '=', 'turns.user_id')
            .leftJoin('position', 'position.id', '=' ,'users.position_id')
            .leftJoin('services', 'services.id', '=', 'turns.service_id')
            .leftJoin('turns_service_times', 'turns_service_times.turn_id', '=', 'turns.id')
            .leftJoin('turns_waiting_times', 'turns_waiting_times.turn_id', '=', 'turns.id')
    }
}

module.exports =  new TurnService();
