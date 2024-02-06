const mongoose = require('mongoose')
const { Schema, model } = mongoose;
const Order = require('./Order');

const pizzaSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 5
    },
    price: {
        type: Number,
        required: true
    },
    order: [Order.schema]
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;