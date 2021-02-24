const BaseService = require('./BaseService');
const helpers = require('../helpers')
const roleService = require('./RoleService')
const cryptor = helpers.getHelper('cryptor')
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
            name: user.name,
            login: user.login,
            access_token: user.access_token,
            ...otherParams
        });
    }

    async userAuthenticate({ login, password }) {
        const user = await this._sdbModels.user.findOne({
            where: { login },
            include: [
                {
                    model: this._sdbModels.role,
                    attributes: ['role_name', 'role_key', 'role_priority']
                }
            ]
        });
        if(!user) return  null;
        if(await cryptor.validPwd(password, user.password)) return user;
        return null;
    }

    async checkAccessRole(userRoles, checkRoles) {
        if (userRoles.length === 0) return 0;

        let accessCount = 0;
        const Op = this._sdbModels.Sequelize.Op;
        const roles = await roleService.getRoles({
            where: {
                role_key: {
                    [Op.in]: checkRoles
                }
            }
        });

        roles.forEach((role) => {
            const checkRole = userRoles.some((userRole) => {
                return String(role.role_key).toLowerCase() === String(userRole.role_key).toLowerCase()
            })
            if(checkRole) {
                accessCount = accessCount + 1;
            }
        });
        return accessCount;
    }
}

module.exports = new AuthService();
