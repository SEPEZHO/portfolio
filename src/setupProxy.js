const proxy = require('http-proxy-middleware');
module.exports = function(app) {
//   app.use(
//     '/API',
//     proxy({
//       target: 'http://localhost:5000',
//       changeOrigin: false
//     })
//   );
// };

  app.use(
  proxy("/API", {
    target: "http://localhost:5000",
    changeOrigin: true,
    onProxyReq(proxyReq) {
      if (proxyReq.getHeader("origin")) {
        proxyReq.setHeader("origin", "http://localhost:5000")
      }
    },
    pathRewrite: { "^/api": "" },
    logLevel: "debug",
  })
)
}
    