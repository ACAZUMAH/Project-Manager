"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const cors_1 = __importDefault(require("cors"));
const express_1 = require("express");
const formatError_1 = __importDefault(require("./formatError"));
const context = ({ req }) => {
    const token = req.headers.token;
    const user = req.user;
    return Promise.resolve({ token, user });
};
const createGraghqlServer = async ({ app, schema, httpServer }) => {
    const server = new server_1.ApolloServer({
        schema,
        formatError: formatError_1.default,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    await server.start();
    app.use("/graphql", (0, cors_1.default)(), (0, express_1.json)(), (0, express4_1.expressMiddleware)(server, { context }));
    return server;
};
exports.default = createGraghqlServer;
