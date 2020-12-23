const terminalRoutes = require('./terminal/TerminalApiRoutes');

module.exports = ({ router, koaRouter }) => {
    router.use('/api/v1/terminal', terminalRoutes.use(koaRouter));
};
