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
        projects: [Project!]
        project(projectId: ID!): Project!
    }

    type Mutation {
        addProject(input: newProjectInput): Project
        updateProject(input: updateProjectInput ): Project
        deleteProject(projectId: ID!): Project
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