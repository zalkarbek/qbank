const db = require('../database/models/index')

class BaseService {
    static getDB() {
        return BaseService.__db
    }
    static getQuery() {
        return BaseService.__db
    }
    static getModel(modelName) {
        return BaseService.__db[name]
    }
}

BaseService.__db = db

module.exports = BaseService;
