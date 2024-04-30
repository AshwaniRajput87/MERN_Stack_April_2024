const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const CookieParser = require('cookie-parser');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(CookieParser());

dotenv.config();

const { PORT, DB_URL, DB_USER, DB_PASSWORD , SECRET_KEY } = process.env;

const port = PORT;

const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jdq8n60.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(dbURL).then((connection)=>{
    console.log('db is connected');
});

app.use(express.json()); // to read data from request body

// mouting the routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
//app.use('/api/auth', authRoutes);


const payload  = {user: "Ashwani Rajput"};

// generate the jwt
app.get('/signup', (req, res)=>{
    try {
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

});


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