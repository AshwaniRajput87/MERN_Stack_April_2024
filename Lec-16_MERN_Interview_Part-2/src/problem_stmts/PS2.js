/**

   PS2: There are certain tasks that are CPU intensive such as image processing , video encoding etc

   we will taking an example of fibonacci computation

   Solution: Child-process

 */

 const express = require('express');
 const cors = require('cors');

 const app = express();

 app.use(cors());

 const calculateFib = (num) => {
   if(num<=1) return num;

   return calculateFib(num-1) + calculateFib(num-2);
 }

 app.get('/fib', (req, res)=>{

  const {number, requestNumber} = req.query;

  if(!number || isNaN(number) || number <= 0) {
    return res.status(400).json({
      error: 'Please provide a positive number'
    })
  }

  const ans = calculateFib(number);

  res.status(200).json({
    status: "success",
    message: ans,
    requestNumber
  })
 });


app.listen(3000, ()=>{
    console.log('Server is up and running on 3000');
})
 

