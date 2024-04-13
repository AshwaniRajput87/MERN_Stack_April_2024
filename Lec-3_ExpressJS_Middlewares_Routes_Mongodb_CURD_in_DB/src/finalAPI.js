const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()); // want to add json data to the request body

// Mounting the routes
app.use('/api/users', userRoutes);


const port = 7000;

const hostname = 'localhost';

app.listen(port, hostname, ()=>{
    console.log(`Server is up and running on http://${hostname}:${port}`);
})