const express = require("express");
const ReviewRouter = express.Router();
const ReviewModel = require("../models/ReviewModel");
const { protectRouteMiddleWare } = require("../controllers/AuthController");
const ProductModel = require("../models/ProductModel");

const createReviewController = async(req, res) =>{
    try {
        // do implementation 
        // give a particular rating to a product with review
        // calculate avg rating as well
        // push that review data in the productModel
        const { review, rating }  = req.body;
        const { productId } = req.params;
        console.log(productId);
        const userId = req.userId;

        const reviewObject =  await ReviewModel.create({
            review,
            rating,
            product: productId,
            user: userId
        });

        const productObject = await ProductModel.findById(productId);
        const averageRating = productObject.averageRating;

        if(Number(averageRating)){
           let sum = averageRating * productObject.reviews.length;
           console.log(sum);

           let finalAvgRating = (sum + reviewObject.rating) / (productObject.reviews.length + 1); // (sum of all the ratings including average rating)/ number of reviews

           productObject.averageRating = finalAvgRating;
             console.log('review object', reviewObject)
        } else {
            productObject.averageRating = reviewObject.rating;
        }

        productObject.reviews.push(reviewObject['_id']);
        await productObject.save();
        console.log(reviewObject);

        res.status(201).json({
            satus: "success",
            data: reviewObject
        });

    } catch (err) {
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}

const getAllReviewForAProductController = async(req, res)  => {
    try {
        // Get the product ID from the request parameters or query string
        const productId = req.params.productId;
        console.log(productId);

        // Pagination parameters
        console.log(req.query);
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        // Query the database to fetch all reviews associated with the product
        const reviews = await ReviewModel.find({ product: productId })
            .skip(skip)
            .limit(limit)
            .exec();

        // Send the retrieved reviews as a response
        res.status(200).json({
            status: "success",
            data: reviews
        });
    } catch (err) {
        // Handle errors
        res.status(500).json({
            status: "failure",
            message: err.message
        });
    }
}

ReviewRouter.post("/:productId", protectRouteMiddleWare, createReviewController);

ReviewRouter.get("/:productId", getAllReviewForAProductController);

module.exports = ReviewRouter;