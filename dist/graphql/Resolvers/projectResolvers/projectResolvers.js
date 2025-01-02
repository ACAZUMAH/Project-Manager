"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sample_1 = require("../../../models/schema/sample");
const Projects = (_) => {
    return sample_1.projects;
};
const project = (_, { projectId }) => {
    return sample_1.projects.find(project => project.id === projectId);
};
const client = (project) => {
    return sample_1.clients.find(client => client.id === project.clientId);
};
const projectResolvers = {
    Query: {
        Projects,
        project,
    },
    Project: {
        client
    }
};
exports.default = projectResolvers;
