var mongoose = require('mongoose');

var product = new mongoose.Schema({
    title: String,
    price: Number,
    likes: {type: Number, default: 0}
})

//product is what will stored in JS
module.exports = mongoose.model('Product', product);