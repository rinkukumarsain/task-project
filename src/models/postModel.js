const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MAIN SCHEMA----------------------------------******************
let postSchema = new Schema({
    category: {
        type:mongoose.Types.ObjectId
    },
    name: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    createdBy: {
        type:mongoose.Types.ObjectId
    },
}, {
    timestamps: true,
    versionKey: false
})
module.exports = mongoose.model('post', postSchema);