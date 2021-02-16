const serviceFactory = require('../services/index')

class Controller {}

Controller.prototype._service = function() {
    return serviceFactory
}
Controller.prototype.getService = function (name) {
    return serviceFactory.getService(name)
}

module.exports = Controller;
