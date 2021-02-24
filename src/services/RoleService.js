const BaseService = require('./BaseService');

class RoleService extends BaseService {
    async getRoles(options = {}) {
        return this._sdbModels.role.findAll({
            ...options,
        });
    }
}

module.exports =  new RoleService();
