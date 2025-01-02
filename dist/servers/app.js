"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const createExpressApp_1 = __importDefault(require("./createExpressApp"));
const createGraphQlServer_1 = __importDefault(require("./createGraphQlServer"));
const index_1 = __importDefault(require("../graphql/index"));
const index_2 = __importDefault(require("../models/index"));
const startApp = async () => {
    await (0, index_2.default)(process.env.MONGO_URL);
    const app = (0, createExpressApp_1.default)();
    const httpServer = http_1.default.createServer(app);
    await (0, createGraphQlServer_1.default)({ app, schema: index_1.default, httpServer });
    const port = process.env.PORT || 3500;
    httpServer.listen(port, () => {
        console.log(`running on port ${port}`);
    });
};
exports.default = startApp;
