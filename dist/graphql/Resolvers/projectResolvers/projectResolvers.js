"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const services = __importStar(require("../../../services/projects/index"));
const clients_1 = require("../../../services/clients");
const addProject = async (_, { input }) => {
    return services.addNewProject(input);
};
const updateProject = async (_, { input }) => {
    return services.updateProject(input);
};
const projects = async (_) => {
    return await services.getAllProjects();
};
const project = async (_, { projectId }) => {
    return await services.getProjectById(projectId);
};
const deleteProject = async (_, { projectId }) => {
    return services.deleteProject(projectId);
};
const client = async (parent) => {
    return await (0, clients_1.getClientById)(parent.clientId);
};
const projectResolvers = {
    Query: {
        projects,
        project,
    },
    Project: {
        client
    },
    Mutation: {
        addProject,
        updateProject,
        deleteProject
    }
};
exports.default = projectResolvers;
