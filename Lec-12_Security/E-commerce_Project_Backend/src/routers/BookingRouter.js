const express = require("express");
const shortid = require('shortid');


const Razorpay = require("razorpay");
const BookingModel = require("../models/BookingModel");
const { protectRouteMiddleWare } = require("../controllers/AuthController");
const UserModel = require("../models/UserModel");

const BookingRouter = express.Router();

const { PUBLIC_KEY, PRIVATE_KEY, WEBHOOK_SECRET } = process.env;
const razorpayInstance = new Razorpay({
    key_id: PUBLIC_KEY,
    key_secret: PRIVATE_KEY,
});

const initialBookingController = async (req, res) => {

    const userId = req.userId;
    const { productId } = req.params;
    console.log('productId', productId);
    const { priceAtThatTime } = req.body;
    const status = 'pending';
 
    try {
       // write the logic to book the products (that means create the orders).

       const bookingObj = await BookingModel.create({
            id: userId,
            productid: productId,
            priceAtThatTime: priceAtThatTime,
            status: status
       });

       console.log(bookingObj);

       const userObj =  await UserModel.findById(userId);

       userObj.bookings.push(bookingObj['_id']);
       await userObj.save();

       console.log(userObj);

       const amount = bookingObj.priceAtThatTime;
       const currency = 'INR';
       const payment_capture = 1;

        let options = {
            amount: amount * 100,  // amount in the smallest currency unit
            currency: currency,
            receipt: bookingObj['_id'],
            payment_capture: payment_capture
        };

        const orderObj = await razorpayInstance.orders.create(options);

        bookingObj.orderId = orderObj.id;

        await bookingObj.save();

        res.status(200).json({
            status: "success",
            message: "Your order has been successfully placed",
            data: {
                id: orderObj.id,
                currency: orderObj.currency,
                amount: orderObj.amount
            }
        })


       

    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "failure",
            message: err.message
        });
    }
}

const getAllBookings = async (req, res) => {
    try {
      // write the logic to get all booking data

    } catch (err) {
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}

// This will be done during frontend integration
const verifyPaymentController = async(req, res) => {
      try {

        if(!WEBHOOK_SECRET) {
            throw new Error('Webhook secret key is not defined!');
        }

        console.log(WEBHOOK_SECRET);

        const { body, headers } = req;

        console.log(body, headers);

        const freshSignature = crypto.createHmac('sha256', WEBHOOK_SECRET).update(JSON.stringify(body)).digest('hex');

        console.log(freshSignature);

        const razorpaySignature = headers['x-razorpay-signature'];

        if(!razorpaySignature) {
            throw new Error('x-razorpay-signature is not being set in the headers')
        }

        if(freshSignature === razorpaySignature) {
            return res.status(200).json({
                message: 'ok'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "failure",
            message: "Internal Server Error"
        })  
    }
}

BookingRouter.post("/:productId", protectRouteMiddleWare, initialBookingController);
BookingRouter.post("/verify", protectRouteMiddleWare, verifyPaymentController);
BookingRouter.get("/", getAllBookings);

module.exports = BookingRouter;