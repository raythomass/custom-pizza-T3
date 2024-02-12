const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://rthomas5678:5whLEIFZYo35SIEc@cluster1.p4toato.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect('mongodb://127.0.0.1:27017');

module.exports = mongoose.connection;