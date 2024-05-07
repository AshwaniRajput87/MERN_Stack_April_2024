const mongoose = require("mongoose");
// ecommerce -> Amazon 
const userSchemaRules = {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 8,
        // validate property 
        // validate: function () { // just remove when you hashing algorithm and as both the password becomes different using hashing
        //     return this.password == this.confirmPassword
        // }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    /****
    *  token -> forget and reset 
    * **/
    token: {
        type: String
    },
    otpExpiry: {
        type: Date
    },
    role: {
        type: String,
        default: "user"
    },
    bookings: {
        type: [mongoose.Schema.ObjectId],
        ref: 'BookingModel'
    }
};

const userSchema = new mongoose.Schema(userSchemaRules);

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;