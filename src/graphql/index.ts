import { mergeSchemas } from "@graphql-tools/schema";
import clientTypeDefs from "./typeDefs/clientTypeDefs/client";
import projectsTypeDefs from "./typeDefs/projectTypeDefs/projects";
import clientResolvers from "./Resolvers/clientResolvers/clientResolvers";
import projectResolvers from "./Resolvers/projectResolvers/projectResolvers";

const typeDefs = [
    clientTypeDefs,
    projectsTypeDefs
];

const resolvers = [
    clientResolvers,
    projectResolvers
];

const schema = mergeSchemas({ typeDefs, resolvers });

export default schema;

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

