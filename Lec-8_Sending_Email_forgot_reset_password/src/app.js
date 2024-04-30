const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const CookieParser = require('cookie-parser');
const UserModel = require('./models/userModel');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(CookieParser());

dotenv.config();

const { PORT, DB_URL, DB_USER, DB_PASSWORD, SECRET_KEY } = process.env;

const port = PORT;

const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jdq8n60.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(dbURL).then((connection)=>{
    // console.log('db is connected', connection);
     console.log('db is connected');
});


app.use(express.json()); // to read data from request body

// mouting the routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
//app.use('/api/auth', authRoutes);


const signupController = async(req, res, next)=>{
    //1. get the user data from the req.body
    const userObj = req.body;

    //2. To create the data in mongoDB
    try {
         if(userObj) {
            let newUser = await UserModel.create(userObj);

            res.status(200).json({
                status: "succes",
                message: "User has been created Successfully!!"
            });
        }

    } catch (error) {
        next(error);
    }
}

const loginController = async(req, res, next) => {

    // for login
    //   - email and password

    const { email, password } = req.body;

    const user = await UserModel.findOne({email});
    console.log(user);

    if(!user) {
        res.status(404).json({
            status: "failure",
            message: "User not found"
        })
    }

    // check the password, if user exist in mongodb or not
    const isPwdSame = password === user.password;
    console.log(isPwdSame);

    try {

        if(isPwdSame) {
            // generate JWT token

            try {
                
                jwt.sign({id: user['_id']}, SECRET_KEY, {algorithm: 'HS512'},(err, token)=>{

                    console.log(token);

                    if(err) {
                        console.log(err);
                        throw new Error(err.message);
                    }

                    res.cookie('token', token, {
                        maxAge: 30 * 60 * 1000,
                        httpOnly: true
                    });

                    res.status(200).json({
                       status: "success",
                       message: "User has been logged in"
                    });
                })
                
            } catch (error) {
                res.json({
                    status: "failure",
                    message: "Invalid Credentials"
                })
            }
        }
        
    } catch (error) {
        next(error);
    }
}

const protectRouteMiddleware = (req, res, next) =>{
    try{
        const { token } = req.cookies;
        const decodedToken = jwt.verify(token, SECRET_KEY);
        if(decodedToken){
            const userId = decodedToken.id;
            req.userId = userId;
            next();
        } 
    } catch(error){
        next(error);
    }

}

const getUserProfile = async(req, res) =>{

    const id = req.userId;
    // querie method: https://mongoosejs.com/docs/api/model.html
    const userDetails = await UserModel.findById(id);
    const {name, email} = userDetails;
    res.status(200).json({
        status: "sccuess",
        message: "User data retrieved successfully!!",
        user: {
            name,
            email
        }
    })
}

app.post('/signup', signupController);
app.post('/login', loginController);
app.get('/getUser', protectRouteMiddleware, getUserProfile);


app.get("/verify", (req, res)=> {

    try {

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

})

app.get('/logout', (req, res)=> {
    res.clearCookie('token');
    res.status(200).json({
        message: 'user logged out successfully'
    })
})

app.use((err,res) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: statusCode,
        message: message
    });
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
});