const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api/get_nonce/?controller=user&method=register', { target: 'http://151.106.108.53', changeOrigin: true }));
};
