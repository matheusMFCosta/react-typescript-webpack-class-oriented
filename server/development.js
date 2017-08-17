"use strict";

var path = require("path");
var proxy = require("proxy-middleware");
var url = require("url");
var express = require("express");
var cookieParser = require("cookie-parser");

var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var config = require("../webpack/webpack.dev.config");

var Dashboard = require("webpack-dashboard");
var DashboardPlugin = require("webpack-dashboard/plugin");
var fs = require("fs");
var http = require("http");
var https = require("https");
var privateKey = fs.readFileSync("server/server.key", "utf8");
var certificate = fs.readFileSync("server/server.crt", "utf8");
var fetch = require("isomorphic-fetch");

var credentials = {
    key: privateKey,
    cert: certificate,
    requestCert: false,
    rejectUnauthorized: false
};

var app = new express();
var port = 443;

console.log("Environment: DEVELOPMENT");
var compiler = webpack(config);
var dashboard = new Dashboard();
compiler.apply(new DashboardPlugin(dashboard.setData));

app.use(
    require("webpack-dev-middleware")(compiler, {
        quiet: true,
        publicPath: config.output.publicPath
    })
);
app.use(
    require("webpack-hot-middleware")(compiler, {
        log: () => {}
    })
);
app.use(cookieParser());

app.use("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/indexDev.html"));
});

http.createServer(app).listen(80);

https.createServer(credentials, app).listen(443);
