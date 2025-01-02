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

`

export default clientTypeDefs;