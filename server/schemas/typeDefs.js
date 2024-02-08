// const { gql } = require('apollo-server-express');

const typeDefs = `
    type User {
        username: String!
        email: String!
        password: String!
        address: String!
        phoneNumber: String!
        savedOrders: [Order]
    }

    type Pizza {
        name: String!
        description: String!
        price: Int
        order: Order
    }

    type Order {
        user: ID!
        status: String
        totalAmount: Int!
        orderDate: String
        savedOrderDetails: OrderDetails
    }

    type OrderDetails {
        order: ID!
        pizza: [Pizza]
        quantity: Int!
        subtotal: Int!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: [User]
        order: [Order]
        details: [OrderDetails]
        me: User
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
        ): Pizza
        addOrder(
            savedOrderDetails: [ID]!
        ): Order
    }

`

module.exports = typeDefs;