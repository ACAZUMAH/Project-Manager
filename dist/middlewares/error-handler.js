"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const errorHandler = async (err, req, res) => {
    if (err instanceof http_errors_1.default.HttpError) {
        return;
    }
    ;
    return;
};
exports.default = errorHandler;
