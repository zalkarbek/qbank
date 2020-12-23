require('dotenv').config();
const http = require('http');
const koa = require('koa');
const koaBody = require('koa-body');
const koaLogger = require('koa-logger');
const koaRouter = require('@koa/router')
const koaCors = require('@koa/cors');
const ignoreAssets = require('./logger/ignoreAssets');
const websocket = require('ws');
const errorHandler404 = require('./errors/404');
const apiRoutes = require('./app/routes');
const socketsRoutes = require('./app/sockets');

const app = new koa();
const router = new koaRouter();

app.use(koaCors());
app.use(ignoreAssets(koaLogger()));
app.use(koaBody());

apiRoutes({ router, koaRouter });
app
.use(router.routes())
.use(router.allowedMethods());

app.use(errorHandler404());

const httpServer = http.createServer(app.callback());
const ws = new websocket.Server({
  server: httpServer
});

socketsRoutes({ ws });
function listening() {
    httpServer.listen(process.env.HOST_PORT);
    console.log('http server started on port:', process.env.HOST_PORT);
}

module.exports = {
  listening,
  httpServer,
  ws
}

