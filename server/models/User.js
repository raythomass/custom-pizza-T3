const mongoose = require('mongoose')
const { Schema, model } = mongoose;
const Order = require('./Order')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    savedOrders: [Order.schema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
