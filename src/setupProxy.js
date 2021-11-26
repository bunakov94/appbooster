const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://data.fixer.io/api/',
      changeOrigin: true,
    })
  )
}
