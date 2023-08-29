const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MAIN SCHEMA----------------------------------******************
let userSchema = new Schema({
    fullname: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: Number,

    },
    role: {
        type: String,

    },
    password: {
        type: String,

    },
}, {
    timestamps: true,
    versionKey: false
})
module.exports = mongoose.model('customer', userSchema);