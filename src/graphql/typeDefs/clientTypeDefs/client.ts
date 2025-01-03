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

    type Mutation {
        addClient(input: newClientInput): Client!
        deleteClient(cliendId: ID!): Client
    }

    input newClientInput {
        name: String!
        email: String!
        phone: String!
    }

`

export default clientTypeDefs;