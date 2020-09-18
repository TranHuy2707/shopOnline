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
    img1 : {
        type : String,
        require : false
    },
    img2 : {
        type : String,
        require : false
    },
    img3 : {
        type : String,
        require : false
    },
    size : {
        type : String,
        require : true
    },
    id : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('product', postSchema)