const express = require("express");
const UserRouter = express.Router();
const { getAllUserHandler, createuserHandler, getUserById, deleteUserById } = require("../controllers/UserController")
// const { checkInput } = require("../controllers/middleWares");
const { protectRouteMiddleWare, isAdminMiddleWare } = require("../controllers/AuthController");
/***********routes**************/
/**********users*****/
UserRouter.use(protectRouteMiddleWare);

UserRouter.get("/", isAdminMiddleWare, getAllUserHandler);

// chaining
UserRouter.post("/", isAdminMiddleWare, createuserHandler);
UserRouter.get("/:userId", getUserById);
UserRouter.delete("/:userId", isAdminMiddleWare,deleteUserById);

module.exports = UserRouter;