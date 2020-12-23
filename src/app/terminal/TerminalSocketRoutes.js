const terminalSocketController = require('./TerminalSocketController')

module.exports.use = function({ socket, ws, method }, { action, broadcast, data, url }) {
    terminalSocketController[method]({
        socket,
        ws,
        method,
        action,
        broadcast,
        data,
        url
    })
}
