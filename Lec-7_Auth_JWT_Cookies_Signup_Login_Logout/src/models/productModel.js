const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Product name is required'],
        unique: [true, "Product name is unique"],
        maxlength: [40, 'Product name should be less than 40 characters']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        validate: {
            validator: function(){
                return this.price > 0
            },
            message: "Price of the product should be greater than 0"
        }

    },
    categories:{
        type: [String],
        required: true
    },

    averageRating: Number,

    discount:{
       type: Number,
       validate: {
           validator: function(){
            return this.discount < this.price
           },
           message: "Discount price should be less than the product price"
       }
    },

    description: {
        type: String,
        required:[true, "Please prvide the decription"],
        maxlength: [400, 'Product description should be less than 400 characters']

    },

    stock:{
        type: Number,
        required: [true, "Please provide the stock"],
        validate:{
            validator: function(){
                return this.stock >= 0
            },
            message: "Stock should be greater than 0"
        }
    },

    brand:{
         type: String,
         required: [true, 'Brand is required']
    },

     createdAt: {
        type: Date,
        default: Date.now()
    }
});

const ProductModel = new mongoose.model('ProductModel', productSchema);

module.exports = ProductModel;