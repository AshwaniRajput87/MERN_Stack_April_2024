const dotenv = require('dotenv');
const express = require('express');
const CookieParser = require('cookie-parser');

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(CookieParser());
/**
*  Let create 3 routes
*    - home (send the cookie)
*    - products (req.cookies) to access the cookies
*    - clearCookie (when the use logout)
*/


app.get('/', (req, res)=>{
    res.cookie('prevpage', 'home', {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, // to make the cookie so that it can be accessed via server and can't be tempered.
    });

    res.status(200).json({
        message: "Thank you for visiting the page!"
    })
});

// accessing the cookies - cookie-parser(req.cookies this object available)

app.get('/products', (req, res) =>{
    console.log(req.cookies.prevpage);

    let messageStr = '';

    if(req.cookies.prevpage) {
        messageStr = `you have vistied the ${req.cookies.prevpage} page`;
    }

    res.status(200).json({
        message: messageStr
    })
});

app.get('/clearCookie', (req, res)=>{
    res.clearCookie('prevpage', {path: '/'});
    res.status(200).json({
        message: 'I have cleared the cookie'
    })
})





app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
});