const mongoose = require('mongoose')
const { Schema, model } = mongoose;
const OrderDetails = require("./OrderDetails")

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        //  required: true
    },
    pizzas: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Pizza',
    }],
    status: {
        type: String,
        default: 'pending'
    },
    quantity: {
        type: String,
    },
    totalAmount: {
        type: Number,
        // required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;