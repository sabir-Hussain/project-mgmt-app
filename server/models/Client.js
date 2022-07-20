const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
})

module.exports = mongoose.model('Client', ClientSchema);