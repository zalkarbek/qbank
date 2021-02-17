const BaseService = require('./BaseService');
const helpers = require('../helpers')
tokenGenerator = helpers.getHelper('tokenGenerator')

class AuthService extends BaseService {
    getUserByLogin(login) {
        return this._sdbModels.user.findOne({
            where: { login },
            include: [
                {
                    model: this._sdbModels.role,
                    attributes: ['role_name', 'role_key', 'role_priority']
                }
            ],
        });
    }

    async userGetToken(user, otherParams) {
        if(!user) return null;
        user.access_token = tokenGenerator.uid();
        await user.save();
        return tokenGenerator.jwtSign({
            userId: user.id,
            name_u: user.name_u,
            login: user.login,
            access_token: user.access_token,
            ...otherParams
        });
    }
}

module.exports = new AuthService();
