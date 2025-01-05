const projectsTypeDefs = `#graphql
    enum ProjectStatus {
        NOT_STARTED
        IN_PROGRESS
        COMPLETED
    }

    type Project {
        id: ID!
        clientId: ID!
        name: String!
        description: String!
        status: ProjectStatus!
        client: Client
    }

    type Query {
        Projects: [Project!]
        Project(projectId: ID!): Project!
    }

    type Mutation {
        AddProject(input: newProjectInput): Project
        UpdateProject(input: updateProjectInput ): Project
        DeleteProject(projectId: ID!): Project
    }

    input newProjectInput {
        clientId: ID!
        name: String!
        description: String!
        status: ProjectStatus
    }

    input updateProjectInput {
        projectId: ID!
        name: String
        description: String
        status: ProjectStatus
    }
`;

export default projectsTypeDefs;