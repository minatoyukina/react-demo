const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    // 配置代理
    app.use(
        proxy('/api', {
            target: 'http://localhost:8081',
            secure: false,
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                "^/api": ""
            }
        })
    )
    // 更多代理...
};
