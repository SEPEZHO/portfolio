const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/API',
        proxy({
            target: 'http://[::1]:7777',
        })
    );
};