// Mondb connect URL: mongodb+srv://ashwinrajput87:<password>@cluster0.jdq8n60.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

/***

PORT = 5050
DB_USER = ashwinrajput87
DB_PASSWORD = 8Gj5g91vLUlL6pt7

 */

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

// const DB_USER = 'ashwinrajput87'
// const DB_PASSWORD = '8Gj5g91vLUlL6pt7'

const { PORT, DB_USER, DB_PASSWORD } = process.env;


const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jdq8n60.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURL).then((connection)=>{
    // console.log('db is connected', connection);
     console.log('db is connected');
});

const userSchemaObj = {
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true 
    },

    password:{
        type: String,
        required: true,
        minlength: 8
    },

    confirmPassword: {
        type: String,
        required: true,
        minlength: 8,
        validate: function(){
            return this.password === this.confirmPassword
        }
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }

};


const userSchema = new mongoose.Schema(userSchemaObj);

const UserModel = mongoose.model("UserModel",userSchema);

console.log(UserModel);

app.use(express.json()); // to read data from request body

const createUser = async(req, res) => {

    try {
        //console.log(req.body); // if you don't use express.json() - undefined

        let user =  UserModel.create(req.body);

        // console.log(user.then((data)=>{
        //   return data;
        // }));

        if(!user) {
            res.status(400).json({
                status:"failure"
            }) 
        }

        res.status(200).json({
            status:"success",
            message: "User has been registered successfully!"
        })
         
    }catch(error) {
        res.status(500).json({message: 'Internal Server Error'});
    }
}

app.use('/api/users', createUser);

const port = PORT;

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
});


/***

  What are the problems are you facing here?

    - all the business logics will be in a single file.
    - code is tightly coupled

       How to solve above problems?

       - MVC DP.
       - Factory DP.

    - MVC design Pattern:

       1. Model (mongoose): Represents the data structure and logic of an application
       2. View: represents UI(User Interface). Client side code -> React/HTML/CSS/JS code
       3. Controller: Flowing the data b/w model and view

       In backend you work upon Majorly on Model and Controller.

       



 */





