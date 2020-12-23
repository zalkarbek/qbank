const terminalRoutes = require('./terminal/routes');

module.exports = ({ router, koaRouter }) => {
    router.use('/api/v1/terminal', terminalRoutes.use(koaRouter));
};