const db = require('../database/models/index')
const mimeList = require('../config/mime')

class BaseService {
    static db() {
        return db
    }
    static getQuery() {
        return db
    }
    init(context) {
        this.context = context
        return this
    }
}

BaseService.prototype._db = db
BaseService.prototype.getMime = function () {
    return mimeList
}

module.exports = BaseService;
