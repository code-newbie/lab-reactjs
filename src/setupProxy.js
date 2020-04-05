const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        createProxyMiddleware("/maps", {
            target: "https://maps.googleapis.com",
            secure: true,
            changeOrigin: true
        })
    );

    app.use(
        createProxyMiddleware("/maps/api", {
            target: "https://maps.googleapis.com",
            secure: true,
            changeOrigin: true
        })
    );

    app.use(
        createProxyMiddleware("/maps/api/js", {
            target: "https://maps.googleapis.com",
            secure: true,
            changeOrigin: true
        })
    );
};