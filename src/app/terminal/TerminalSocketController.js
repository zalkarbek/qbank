const Controller = require('../Controller');

class TerminalSocketController extends Controller {
    hello(socket, props) {
        console.log(props)
    }
}

module.exports = new TerminalSocketController();
