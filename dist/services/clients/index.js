"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientById = exports.getAllClients = void 0;
const mongoose_1 = require("mongoose");
const client_1 = __importDefault(require("../../models/schema/client"));
const http_errors_1 = __importDefault(require("http-errors"));
const getAllClients = async () => {
    const data = await client_1.default.find();
    if (!data)
        throw new http_errors_1.default.NotFound('Clients not found.');
    return data;
};
exports.getAllClients = getAllClients;
const getClientById = async (id) => {
    if (!mongoose_1.Types.ObjectId.isValid(id))
        throw new http_errors_1.default.BadRequest('Invalid client id');
    const client = await client_1.default.findById(id);
    if (!client)
        throw new http_errors_1.default.NotFound('Client not found');
    return client;
};
exports.getClientById = getClientById;
