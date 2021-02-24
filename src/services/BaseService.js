const db = require('../database/index')
const mimeList = require('../config/mime')
const _ = require('lodash')

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
BaseService.prototype._ = _
BaseService.prototype.getMime = function () {
    return mimeList
}

module.exports = BaseService;
