const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    name : {
        type : String,
        require : true
    },
    country : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    city : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        require : true
    },
    email : {
        type : String,
        require : false
    },
    note : {
        type : String,
        require : false
    }
})

module.exports = mongoose.model('order', orderSchema)