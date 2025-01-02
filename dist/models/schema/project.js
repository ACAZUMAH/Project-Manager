"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const projectsSchema = new mongoose_1.default.Schema({
    cliendId: { type: mongoose_1.default.Types.ObjectId, ref: 'clients' },
    name: { type: String },
    description: { type: String },
    status: { type: String, enum: ['not started', 'in progress', 'completed'] }
});
const Project = mongoose_1.default.model('projects', projectsSchema);
exports.default = Project;