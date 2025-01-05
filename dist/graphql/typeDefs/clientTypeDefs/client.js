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
        Clients: [Client!]
        Client(clientId: ID!): Client
    }

    type Mutation {
        AddClient(input: newClientInput): Client!
        DeleteClient(clientId: ID!): Client
    }

    input newClientInput {
        name: String!
        email: String!
        phone: String!
    }

`;
exports.default = clientTypeDefs;
