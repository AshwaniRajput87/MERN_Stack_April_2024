const mongoose = require('mongoose');

const reviewSchemaRules = {

    /**
        review
        rating
        createAt
        user
        product
      
     */

     review: {
        type: String,
        required: true
     },

     rating: {
        type: number,
        min: 1,
        max: 5,
        required: true
     },
     createdAt: {
        type: Date,
        default: Date.now(),

     },
     user:{
        type: [mongoose.Schema.ObjectId],
        required: true,
        ref: "UserModel"
    },

    product: {
        type: [mongoose.Schema.ObjectId],
        required: true,
        ref: "ProductModel"
    },
}

const reviewSchema = new mongoose.Schema(reviewSchemaRules);

const reviewModel = new mongoose.model('ReviewModel', reviewSchema);

module.exports = reviewModel;