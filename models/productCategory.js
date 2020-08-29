const mongose = require('mongose');
const Schema = mongose.Schema;

//new model
const productCategorySchema = new Schema ({
    name : {
        type : String,
        require : true
    }
})

module.exports = mongose.model('productCategory', productCategorySchema)