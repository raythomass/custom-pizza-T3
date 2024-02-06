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
        pizza: ID!
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

`

module.exports = typeDefs;