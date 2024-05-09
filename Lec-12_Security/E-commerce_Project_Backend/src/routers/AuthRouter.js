const express = require("express");
const rateLimiter = require('../utils/rateLimiter');
const { 
    signupController, 
    loginController, 
    forgetPasswordController, 
    resetPasswordController,
    logoutController
} = require("../controllers/AuthController");

const AuthRouter = express.Router();

AuthRouter.post("/signup", signupController);
AuthRouter.post("/login", loginController);
AuthRouter.patch("/forgetpassword", rateLimiter, forgetPasswordController);
AuthRouter.patch("/resetPassword/:userId", resetPasswordController);
AuthRouter.get("/logout",logoutController);
module.exports = AuthRouter;