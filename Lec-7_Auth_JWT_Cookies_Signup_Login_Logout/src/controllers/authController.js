
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const verify = async function(req,res)
{
    try {

        const {SECRET_KEY} = req.container;
        const { token }  = req.cookies;
        console.log(token);

        const decoedToken = jwt.verify(token, SECRET_KEY);

        res.status(200).json({
            message: 'token is decoded',
            decoedToken
        });
        
    } catch (error) {
         res.status(400).json({
            status: "failure",
            message: error.message
        })
        
    }
}


const signUp = async function(req,res)
{
    
    try {
        console.log("made it to the signup", req.container);

        const {SECRET_KEY} = req.container;

        const payload = req.body;
        
        let user =  UserModel.create(payload);

        if(!user) {
            res.status(400).json({
                status:"failure"
            }) 
        }



      //  res.status(200).json({m:"heres what it is ",...payload});
        jwt.sign({data: payload}, SECRET_KEY, {algorithm: 'HS512'},(err, data)=>{

            if(err) {
                console.log(err);
                throw new Error(err.message);
            }

            res.cookie('token', data, {
                maxAge: 30 * 60 * 1000,
                httpOnly: true
            });

            res.status(200).json({
                authToken: data
            });
        })
        
    } catch (error) {
        res.json({
            status: "failure",
            message: error.message
        })
    }
}


const signOut = async function(req,res)
{
    try {
        res.clearCookie('token');
        res.status(200).json({
            message: 'user logged out successfully'
        })
        
    } catch (error) {
        res.json({
            status: "failure",
            message: error.message
        })
    }
}

const controllerObj = {actions:[
    {method:"post",name:"signUp",fn:signUp},
{method:"get",name:"verify",fn:verify},
{method:"get",name:"signOut",fn:signOut}
]};

module.exports = controllerObj;