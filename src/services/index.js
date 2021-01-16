const TerminalService = require('./TerminalService.js')
const TurnService = require('./TurnService')
const AdsService = require('./AdsService')
const HelperService = require('./HelperService')
const UserService = require('./UserService')
const TvTablosService = require('./TvTablosService')

class ServiceFactory {
    constructor(context) {
        this.context = context
        this.services = {
            terminal: TerminalService.init(context),
            turn: TurnService.init(context),
            ads: AdsService.init(context),
            helper: HelperService.init(context),
            user: UserService.init(context),
            tvtablos: TvTablosService.init(context)
        }
    }

    getService(name) {
        return this.services[name]
    }
}


module.exports = new ServiceFactory();
