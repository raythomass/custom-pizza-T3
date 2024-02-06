const { Schema, Model } = require('mongoose');

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
});

const Pizza = Model('Pizza', pizzaSchema);

module.exports = Pizza;