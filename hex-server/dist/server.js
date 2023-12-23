"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var env_1 = require("./utils/env");
// Create express app
var app = (0, express_1.default)();
// Socket server
var io = new socket_io_1.Server((0, http_1.createServer)(app));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: env_1.CORS_ORIGIN,
}));
// Init routes and api's
var routes = [];
routes.forEach(function (route) {
    app.use(route);
});
// Init Socket events
io.on('connection', function (socket) {
    console.log('a user connected');
});
exports.default = app;
