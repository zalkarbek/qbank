const BaseService = require('./BaseService');
const helpers = require('../helpers/index');
const cryptor = helpers.getHelper('cryptor');

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
    async getUserById(id) {
        return this._sdbModels.user.findByPk(id, {
            include: [
                {
                    model: this._sdbModels.role
                }
            ]
        })
    }

    async setRoles(id, roles) {
        const user = await this.getUserById(id)
        return user.setRoles(roles)
    }

    async createUser(newUser) {
        const hash = await cryptor.hashPwd(newUser.password)
        return this._sdbModels.user.create({
            name: newUser.name,
            login: newUser.login,
            password: hash.password_hashed
        })
    }

    async userAccessTokenDelete(id) {
        const user = await this.getUserById(id)
        user.access_token = null
        return await user.save()
    }
}

module.exports = new UserService();
