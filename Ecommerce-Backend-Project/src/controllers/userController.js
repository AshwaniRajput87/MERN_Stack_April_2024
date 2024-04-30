const UserModel = require('../models/userModel');

const createUser = async(req, res) => {

    try {
        
        let user =  UserModel.create(req.body);

        if(!user) {
            res.status(400).json({
                status:"failure"
            }) 
        }

        res.status(200).json({
            status:"success",
            message: "User has been registered successfully!"
        })
         
    }catch(error) {
        res.status(500).json({message: 'Internal Server Error'});
    }
}

const getUsers = async(req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
         res.status(500).json({message: 'Internal Server Error'});
    }
}

const getUserById = async(req, res) =>{

     const { id } = req.params;

     try {
        const users = await UserModel.findById(id)
        res.status(200).json(users);
    } catch (error) {
         res.status(500).json({message: 'Internal Server Error'});
    }
}

const updateUser = async(req, res) =>{

    const { id } = req.params;

    try {

        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});

        if(!user) {
            res.status(404).json({message: "user not found!"})
        }

        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'});
    } 
    
}

const deleteUser = async(req, res) =>{

    const { id } = req.params;

    try {

        const user = await UserModel.findByIdAndDelete(id);

         if(!user) {
            res.status(404).json({message: "user not found!"})
        }

        res.status(200).json({message: "USer has been delete successfully!"});

        
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'});
    }
    
}


module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}