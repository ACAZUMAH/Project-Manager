"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectsTypeDefs = `#graphql
    type Project {
        id: ID!
        clientId: ID!
        name: String!
        description: String!
        status: String!
        client: Client
    }

    type Query {
        Projects: [Project!]
        project(projectId: ID!): Project
    }
`;
exports.default = projectsTypeDefs;
