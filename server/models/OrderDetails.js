const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const orderDetailsSchema = new Schema({
    order: { 
        type: Schema.Types.ObjectId, 
        ref: 'Order', 
        required: true 
    },
    pizza: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Pizza', 
        required: true 
    }],
    quantity: { 
        type: Number, 
        required: true 
    },
    subtotal: { 
        type: Number, 
        required: true 
    },
});
  
const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);
 
module.exports = OrderDetails;