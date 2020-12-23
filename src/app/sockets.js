const terminalSocketRoutes = require('./terminal/TerminalSocketRoutes')

module.exports = ({ ws }) => {
    ws.on('connection', (socket) => {
        socket.on('message', (props = null) => {
            if(typeof props === 'object') {
                const [controller, method] = props.url.split('/')
                if(controller === 'terminal') {
                    terminalSocketRoutes.use({ socket, ws, method }, { ...props })
                }
            }
        })
    })
}
