"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = exports.CORS_ORIGIN = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = (_a = process.env, _a.PORT), exports.CORS_ORIGIN = _a.CORS_ORIGIN, exports.URL = _a.URL;
