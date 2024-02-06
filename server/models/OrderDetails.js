const { Schema, model } = require('mongoose');

const orderDetailsSchema = new Schema({
    order: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Order', 
        required: true 
    },
    pizza: [{ 
        type: mongoose.Schema.Types.ObjectId, 
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
  
const OrderDetails = model('OrderDetails', orderDetailsSchema);
 
module.exports = OrderDetails;