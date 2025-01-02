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

export default projectsTypeDefs;