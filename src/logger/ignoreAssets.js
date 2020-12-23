module.exports = function ignoreAssets(mw) {
    return async function(ctx, next) {
        if (/(\.js|\.css|\.ico)$/.test(ctx.path)) {
            await next();
        } else {
            // must .call() to explicitly set the receiver
            await mw.call(this, ctx, next);
        }
    };
};