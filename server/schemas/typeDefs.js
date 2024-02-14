// const { gql } = require('apollo-server-express');

const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        address: String
        phoneNumber: String
        savedOrders: [Order]
    }

    type Pizza {
        _id: ID
        name: String
        description: String
        price: Int
    }

    type Order {
        _id: ID
        user: ID
        pizzas: [Pizza]
        status: String
        quantity: String
        totalAmount: Int
        orderDate: String
    }

    input PizzaType {
        name: String
        description: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: [User]
        order: [Order]
        me (_id: ID!): User
        savedOrder (id:ID!): Order
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
            name: String
            description: String
        ): Order
    }

`

module.exports = typeDefs;