const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Razorpay = require('razorpay');
const shortid = require('shortid');
const crypto = require('crypto'); // nodeJS crypto module -> https://nodejs.org/docs/latest/api/crypto.html#hmacdigestencoding


const app = express();
app.use(express.json()); // to read data from request body

dotenv.config();

const { PORT, DB_URL, DB_USER, DB_PASSWORD, PUBLIC_KEY, PRIVATE_KEY, WEBHOOK_SECRET } = process.env;

const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jdq8n60.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURL).then((connection)=>{
    // console.log('db is connected', connection);
     console.log('db is connected');
});

const checkoutController = (req, res) => {

    try {

        const razorpayInstance = new Razorpay({
            key_id: PUBLIC_KEY,
            key_secret: PRIVATE_KEY,
        });

        let options = {
            amount: 50000,  // amount in the smallest currency unit
            currency: "INR",
            receipt: shortid.generate(),
            payment_capture: 1
        };

        razorpayInstance.orders.create(options, function(err, order) {
            res.status(201).json({
                status: "success",
                data: {
                    id: order.id,
                    currency: order.currency,
                    amount: order.amount,
                    receipt: order.receipt
                }
            })
        });

    } catch (error) {

        res.status(500).json({
            status: "failure",
            message: "Internal Server Error"
        })
        
    }
    

}

const paymentVerificationController = (req, res) =>{

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


app.post('/checkout', checkoutController);
app.post('/verification', paymentVerificationController);

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
});
