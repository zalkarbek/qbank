const terminalRoutes = require('./terminal/TerminalApiRoutes');
const turnRoutes = require('./turns/TurnApiRoutes');
const adsRoutes = require('./ads/AdsApiRoutes.js');
const userRoutes = require('./users/UserApiRoutes');
const tvtablosRoutes = require('./tvtablos/TvTablosApiRoutes');

module.exports = ({ router, koaRouter }) => {
    router.use(terminalRoutes.use(koaRouter));
    router.use(turnRoutes.use(koaRouter));
    router.use(adsRoutes.use(koaRouter));
    router.use(userRoutes.use(koaRouter));
    router.use(tvtablosRoutes.use(koaRouter));
};
