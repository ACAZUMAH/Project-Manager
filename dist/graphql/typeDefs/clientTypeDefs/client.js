"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientTypeDefs = `#graphql
    type Client {
        id: ID!
        name: String!
        email: String!
        phone: String!
    }

    type Query {
        clients: [Client!]
        client(clientId: ID!): Client
    }

`;
exports.default = clientTypeDefs;
