const BaseService = require('./BaseService');

class UserService extends BaseService {
    async getUsers() {
        return this._db
            .select(
                'id'
                ,'name_u AS user_name'
                , 'login AS user_login'
            )
            .from('users')
    }
}

module.exports = new UserService();