const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//tao cac model
const postSchema = new Schema ({
    detail : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    img : {
        type : String,
        require : true
    },
    size : {
        type : Number,
        require : true
    }
})

module.exports = mongoose.model('product', postSchema)