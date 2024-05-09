
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const xss = require("xss");
// including env variables
dotenv.config();
const { PORT, DB_PASSWORD, DB_USER } = process.env;
/**********************connection to our DB********************************/
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jdq8n60.mongodb.net/?retryWrites=true&w=majority`;
// once 
mongoose.connect(dbURL)
    .then(function (connection) {
        console.log("connected to db");
    }).catch(err => console.log(err))

// with this your creating simple app -> api
const app = express();
const UserRouter = require("./routers/UserRouter");
const ProductRouter = require("./routers/ProductRouter");
const AuthRouter = require("./routers/AuthRouter");
const BookingRouter = require("./routers/BookingRouter");
const ReviewRouter = require("./routers/ReviewRouter");
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('x-api-key', 'hgsafd37246378v72343');
    next();
});

app.get('/route', (req, res)=>{

    // input = '<script>const x=10;</script>'

    const userInput = req.query.input;
    const sanitisedData = xss(userInput);
    res.send(sanitisedData);

})

app.use("/api/user", UserRouter);
app.use("/api/product", ProductRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/booking", BookingRouter);
app.use("/api/review", ReviewRouter);


/******************handler functions ***************/
// 404 route not found
app.use(function cb(req, res) {
    // console.log("");
    // response 
    res.status(404).json({
        status: "failure",
        message: " route not found"
    })
});
// server -> run on a port 
app.listen(PORT, function () {
    console.log(` server is listening to port ${PORT}`);
})

/***
 * At code level -> prevent Repetiton -> Factory(controllers)
 * At file level -> structure to segregate the code  -> MVC
 * **/









