const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const CookieParser = require('cookie-parser');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(CookieParser());

dotenv.config();

const { PORT, MONGO_DB_DOMAIN, DB_USER, DB_PASSWORD , SECRET_KEY } = process.env;

const port = PORT;

const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${MONGO_DB_DOMAIN}/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(dbURL).then((connection)=>{
    // console.log('db is connected', connection);
     console.log('db is connected');
});


console.log(__dirname);
// Serve static files from the 'public' directory
app.use(express.static(path.join(`${__dirname}/../`, 'public')));
app.use(express.json()); // to read data from request body

// the before
app.use((req,res,next)=>{
    console.log("I am in the middle thing")
   
    const container = {SECRET_KEY};
    req.container = container;
    console.log(container);
    next();
   });
   


// mouting the routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/auth',authRoutes);
// error goes after .. i think
app.use((err,res) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    console.log("made it to the generic erro thingie");
    res.status(statusCode).json({
        status: statusCode,
        message: message
    });
})



app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
});