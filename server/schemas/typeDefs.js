// const { gql } = require('apollo-server-express');

const typeDefs = `
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        address: String!
        phoneNumber: String!
        savedOrders: [Order]
    }

    type Pizza {
        _id: ID
        name: String
        description: String
        price: Float
    }

    type Order {
        _id: ID
        pizzas: [Pizza]
        status: String
        orderDate: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: [User]
        pizza: [Pizza]
        order: [Order]
        me (_id: ID!): User
        savedOrder (id:ID!): Order
        pizza: [Pizza]
    }

    type Mutation {
        login(
            email: String
            password: String
        ): Auth
        addUser(
            username: String!
            email: String!
            password: String!
            address: String!
            phoneNumber: String!
        ): Auth
        updateUser(
            username: String!
            email: String!
            password: String!
            address: String!
            phoneNumber: String!
        ): User
        addPizza(
            pizzas: [ID]!
        ): Order
    }

`

module.exports = typeDefs;