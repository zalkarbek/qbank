const TerminalService = require('./TerminalService.js')

class ServiceFactory {
    constructor(context) {
        this.context = context
        this.services = {
            terminal: new TerminalService()
        }
    }

    getService(name) {
        return this.services[name]
    }
}


module.exports = new ServiceFactory();
