const mongose = require('mongoose');
const Schema = mongose.Schema;

//new model
const productCategorySchema = new Schema ({
    name : {
        type : String,
        require : true
    },
    id : {
        type : Number,
        require : true
    }
})

module.exports = mongose.model('productCategory', productCategorySchema)