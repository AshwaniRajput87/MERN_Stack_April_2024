const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

dotenv.config();

const { PORT, DB_USER, DB_PASSWORD } = process.env;

const port = PORT;

const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jdq8n60.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURL).then((connection)=>{
    // console.log('db is connected', connection);
     console.log('db is connected');
});

app.use(express.json()); // to read data from request body

// mouting the routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


app.use('/search', (req, res)=>{
    console.log(req.query);
    res.status(200).json({
        message: "Search has been done successfully!",
        data: req.query
    });
});


app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
});