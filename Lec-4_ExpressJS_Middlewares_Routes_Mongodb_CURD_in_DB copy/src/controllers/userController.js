const UserModel = require('../models/userModel');

const createUser = async(req, res) => {

    try {
        //console.log(req.body); // if you don't use express.json() - undefined

        let user =  UserModel.create(req.body);

        // console.log(user.then((data)=>{
        //   return data;
        // }));

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

const getUsers = async(req, res) =>{

}

const getUser = async(req, res) =>{

}

const updateUser = async(req, res) =>{
    
}

const deleteUser = async(req, res) =>{
    
}


module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}