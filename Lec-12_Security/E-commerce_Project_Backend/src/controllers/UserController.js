const { getByIdFactory,
    getAllFactory,
    createFactory,
    deleteByIdFactory } = require("../utils/crudFactory");
const UserModel = require("../models/UserModel");
/*********************users********************/ 
const getAllUserHandler = getAllFactory(UserModel);
const createuserHandler = createFactory(UserModel);
const getUserById = getByIdFactory(UserModel);
const deleteUserById = deleteByIdFactory(UserModel);


module.exports = {
    getAllUserHandler, createuserHandler, getUserById, deleteUserById
}