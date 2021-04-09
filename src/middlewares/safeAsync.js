const asyncMiddleware = fn => (ctx, next) => {
  return fn(ctx, next)
    .catch(next);
};

module.exports = asyncMiddleware;
