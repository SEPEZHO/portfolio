const proxy = require('http-proxy-middleware');
module.exports = function(app) {
//   app.use(
//     '/API',
//     proxy({
//       target: 'http://[::1]:5000',
//     })
//   );
// };

  app.use(
  proxy("/API", {
    target: "http://127.0.0.1:5000",
    changeOrigin: true,
    onProxyReq(proxyReq) {
      if (proxyReq.getHeader("origin")) {
        proxyReq.setHeader("origin", "http://127.0.0.1:5000")
      }
    },
    pathRewrite: { "^/api": "" },
    logLevel: "debug",
  })
)
}

// const proxy = require("http-proxy-middleware");
// module.exports = function(app) {
//   app.use(proxy("/API/**", { // https://github.com/chimurai/http-proxy-middleware
//     target: "http://127.0.0.1:5000",
//     secure: false
//   }));
// };