const db = require('../database/index')
const mimeList = require('../config/mime')

class BaseService {
    static db() {
        return db.knex
    }
    init(context) {
        this.context = context
        return this
    }
}

BaseService.prototype._db = db.knex
BaseService.prototype._sdb = db.sequelize
BaseService.prototype._sdbModels = db.sequelizeModels
BaseService.prototype.getMime = function () {
    return mimeList
}

module.exports = BaseService;
