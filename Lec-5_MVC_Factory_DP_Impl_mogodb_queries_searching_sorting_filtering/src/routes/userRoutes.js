const express = require('express');

const {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}  = require('../controllers/userController');


const router = express.Router();

router.post('/', createUser);

module.exports = router;