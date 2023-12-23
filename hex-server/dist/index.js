"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
var env_1 = require("./utils/env");
// Start server
server_1.default.listen(env_1.PORT, function () {
    console.log("Server is running, listening on PORT: ".concat(env_1.PORT));
});
