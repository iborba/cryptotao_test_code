"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const os_1 = require("os");
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl} HOST: ${(0, os_1.hostname)()}`);
    next();
};
exports.loggerMiddleware = loggerMiddleware;
