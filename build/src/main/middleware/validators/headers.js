"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerValidator = void 0;
const http_status_codes_1 = require("http-status-codes");
const headerValidator = (req, res, next) => {
    return req.headers.authorization ? next() : res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: 'Token invalid' });
};
exports.headerValidator = headerValidator;
