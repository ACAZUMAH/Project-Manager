"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@graphql-tools/schema");
const client_1 = __importDefault(require("./typeDefs/clientTypeDefs/client"));
const projects_1 = __importDefault(require("./typeDefs/projectTypeDefs/projects"));
const clientResolvers_1 = __importDefault(require("./Resolvers/clientResolvers/clientResolvers"));
const projectResolvers_1 = __importDefault(require("./Resolvers/projectResolvers/projectResolvers"));
const typeDefs = [
    client_1.default,
    projects_1.default
];
const resolvers = [
    clientResolvers_1.default,
    projectResolvers_1.default
];
const schema = (0, schema_1.mergeSchemas)({ typeDefs, resolvers });
exports.default = schema;
// import { projects, clients } from "./sample";
// import graphql from 'graphql';
// const ClientType = new graphql.GraphQLObjectType({
//     name: 'Client',
//     fields: () => ({
//         id: { type: graphql.GraphQLID },
//         name: { type: graphql.GraphQLString },
//         email: { type: graphql.GraphQLString },
//         phone: { type: graphql.GraphQLString }
//     })
// });
// const RootQuery = new graphql.GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         client: {
//             type: ClientType,
//             args: { id: { type: graphql.GraphQLID }},
//             resolve(parent, args){
//                 return clients.find(client => client.id === args.id)
//             }
//         }
//     }
// });
// export default new graphql.GraphQLSchema({
//     query: RootQuery
// })
