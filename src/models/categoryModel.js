const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MAIN SCHEMA----------------------------------******************
let categorySchema = new Schema({
    name: {
        type: String,
        default: ''
    }
}, {
    timestamps: true,
    versionKey: false
})
module.exports = mongoose.model('category', categorySchema);