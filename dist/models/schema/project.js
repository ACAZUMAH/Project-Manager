"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const projectsSchema = new mongoose_1.default.Schema({
    clientId: { type: mongoose_1.default.Types.ObjectId, ref: "clients" },
    name: { type: String },
    description: { type: String },
    status: { type: String, enum: ["NOT_STARTED", "IN_PROGRESS", "COMPLETED"], default: "NOT_STARTED" },
});
const Project = mongoose_1.default.model('projects', projectsSchema);
exports.default = Project;
