const express = require('express');

const app = express();



// app.use((req, res)=>{
//     res.json({
//         status: "success",
//         message:"got the get data"
//     });
// });


// app.get('/api/users', (req, res)=>{
//     res.status(200).json({
//         status: "success",
//         message:"got the get data" 
//     });
// })

// app.post('/api/user', (req, res)=>{
//     res.status(200).json({
//         status:"success",
//         message:"got post data"
//     })
// });

// app.put('/api/update/user', (req, res)=>{
//     res.status(200).json({
//         status:"success",
//         message:"got the put data"
//     })
// });

// app.delete('/api/delete/user', (req, res)=>{
//     res.status(200).json({
//         status:"success",
//         message:"got the delete data"
//     })
// });

// app.use((req, res)=>{
//     res.json({
//         status: "failure",
//         message:"No data found"
//     });
// });

app.use(express.json()); // want to add json data to the request body

app.use((req, res, next)=>{
    console.log(req.body);
    next();
});


app.post('/api/user', (req, res)=>{
    res.status(200).json({
        status: "success",
        message:"got the post data" 
    });
})



app.get('/api/users', (req, res)=>{
    res.status(200).json({
        status: "success",
        message:"got the get data" 
    });
})

const port = 7000;

const hostname = 'localhost';

app.listen(port, hostname, ()=>{
    console.log(`Server is up and running on http://${hostname}:${port}`);
})