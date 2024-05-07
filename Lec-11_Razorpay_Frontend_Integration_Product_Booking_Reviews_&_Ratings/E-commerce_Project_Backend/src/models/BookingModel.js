const mongoose = require('mongoose');


const bookingSchemaRules = {

    /**
       1. Booking time
       2. priceAtThat
       3. status
       4. user
       5. product, // concept of nested schema we need to use. document size = 16MB
       6. paymentOrderId
    */

    bookedAt: {
        type: Date,
        default: Date.now(),
    },

    priceAtThatTime: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', "failed", 'success']
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

    orderId: {
        type: String
    }
};

const bookingSchema = new mongoose.Schema(bookingSchemaRules);

const BookingModel = new mongoose.model('BookingModel', bookingSchema);

module.exports = BookingModel;