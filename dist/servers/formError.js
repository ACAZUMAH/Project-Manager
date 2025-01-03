"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const errors_1 = require("@apollo/server/errors");
const STATUS_CODES = new Map([
    [404, "NOT FOUND"],
    [400, "BAD REQUEST"],
    [500, "INTERNAL SERVER ERROR"]
]);
const formatError = (formattedError, error) => {
    const originalError = (0, errors_1.unwrapResolverError)(error);
    if (!(originalError instanceof http_errors_1.default.HttpError)) {
        return formattedError;
    }
    ;
    return {
        ...formattedError,
        message: originalError.message,
        extensions: {
            ...formattedError.extensions,
            code: STATUS_CODES.get(originalError.statusCode)
        }
    };
};
exports.default = formatError;
