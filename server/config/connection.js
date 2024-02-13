const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env')});
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI || 'mongodb+srv://rthomas5678:5whLEIFZYo35SIEc@cluster1.p4toato.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri);

module.exports = mongoose.connection;