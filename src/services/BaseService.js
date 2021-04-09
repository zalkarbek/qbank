const db = require('../database/index')
const mimeList = require('../config/mime')
const _ = require('lodash')
const departmentConfig = require('../config/department')

class BaseService {
    init(context) {
        this.context = context
        return this
    }
}

//
BaseService.prototype._db = db.knex
BaseService.prototype._sdb = db.sequelize
BaseService.prototype._sdbModels = db.sequelizeModels
BaseService.prototype.knexBuilder = db.knexBuilder
BaseService.prototype.knexChange = async function (dbConfig) {
    await db.knexChange(dbConfig)
    BaseService.prototype._db = db.knex
}
//
BaseService.prototype._ = _
//
BaseService.prototype.getMime = function () {
    return mimeList
}
//
BaseService.prototype.departmentAddressLists = departmentConfig.departmentsLists
//
BaseService.prototype.getDepartmentAddressByKey = function (key) {
    return this.departmentAddressLists.find((departmentAddress) => {
        return _.toLower(departmentAddress.key) === _.toLower(key)
    })
}
BaseService.prototype.getDepartmentAddressByName = function (name) {
    return this.departmentAddressLists.find((departmentAddress) => {
        return _.toLower(departmentAddress.name) === _.toLower(name)
    })
}
//
BaseService.prototype.setCurrentDepartment = async function (currentDepartmentKey) {
    BaseService.prototype.currentDepartment = this.getDepartmentAddressByKey(currentDepartmentKey)
}


module.exports = BaseService;
