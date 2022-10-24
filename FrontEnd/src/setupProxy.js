const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
  app.use(
    ['/api','/username'],
    createProxyMiddleware({
      target: 'http://localhost:3030',
    })
  );
};
