
const express = require('express');
const router = express.Router();

const users = [
    {id: 1, name: "Ashwani Rajput"},
    {id: 2, name: "Akash"},
    {id: 3, name: "Manish"},
    {id: 4, name: "Shweta"},
    {id: 5, name: "Sunny"},
];

// get all users data
router.get('/', (req, res)=>{
    try {
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })  
    }
    
});

router.get('/:userId', (req, res)=>{
    const id = parseInt(req.params.userId);

    const user = users.find(user => user.id === id);

    try {
        if(!user){
             res.status(404).json({error: 'user not found'});
        } else {
            res.status(200).json(user);
        }
        
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })  
    }
});

// post end point
router.post('/', (req, res)=>{
    const { name } = req.body;

    // console.log(req.body);

    if(!name) {
        res.status(400).json({error: 'Name is required'});
    }

    const id = users.length + 1;

    const newUser = {id, name};

    users.push(newUser);

    try {
        res.status(200).json(newUser);
        
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })  
    }
});

/**
 * Assignments:

   1. update the users data
   2. delete the data. 

 */

module.exports = router;