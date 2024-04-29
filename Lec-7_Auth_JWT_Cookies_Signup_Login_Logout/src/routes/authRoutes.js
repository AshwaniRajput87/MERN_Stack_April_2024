const express = require('express');
const controllerObj= require("../controllers/authController");

const router = express.Router();


for(let i = 0;i<controllerObj.actions.length;i++)
{
    let action = controllerObj.actions[i];
    const registerRoute = router[action.method].bind(router);
    console.log(`adding  route for :'${action.name}', it's method is a ${action.method} `);  
    registerRoute(`/${action.name}`,action.fn);
}



module.exports = router;

