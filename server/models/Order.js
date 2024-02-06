const mongoose = require('mongoose')
const { Schema, model } = mongoose;
const OrderDetails = require("./OrderDetails")

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    totalAmount: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    savedOrderDetails: [OrderDetails.schema]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;