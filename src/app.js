require('dotenv').config();
const path = require('path');
const fs = require('fs');
const http = require('http');
const koa = require('koa');
// const koaJwt = require('koa-jwt');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const koaLogger = require('koa-logger');
const koaRouter = require('@koa/router')
const koaCors = require('@koa/cors');
const ignoreAssets = require('./logger/ignoreAssets');
const websocket = require('ws');
const errorHandler404 = require('./errors/404');
const errorHandler401 = require('./errors/401');
const apiRoutes = require('./app/routes');
const socketsRoutes = require('./app/sockets');

const app = new koa();
const router = new koaRouter();
const rootPath = require('app-root-path');

app.rootPath = rootPath.path;
app.tempPath = path.join(rootPath.path, 'temp');
app.storagePath = path.join(rootPath.path, 'storages');
app.uploadPath = path.join(rootPath.path, 'storages/uploads');
app.cachePath = path.join(rootPath.path, 'storages/cache');

app.use(errorHandler401);
app.use(koaCors());
app.use(ignoreAssets(koaLogger()));
app.use(koaBody({
    formidable:{ uploadDir: app.tempPath },    //This is where the files would come
    multipart: true,
    urlencoded: true
}));

apiRoutes({ app, router, koaRouter });
app.use(koaStatic(path.join(__dirname, '../static')));

app
.use(router.routes())
.use(router.allowedMethods());

app.use((ctx, next) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.join(__dirname, '../static', 'index.html'));
});

app.use(errorHandler404());

const httpServer = http.createServer(app.callback());
const ws = new websocket.Server({
  server: httpServer
});

socketsRoutes({ ws });

const PORT = process.env.NODE_ENV === 'development' ? process.env.HOST_DEV_PORT : process.env.HOST_PROD_PORT

function listening() {
    httpServer.listen(PORT);
    console.log('http server started on port:', PORT);
}

module.exports = {
    listening,
    httpServer,
    ws
}
