/**
   What is Child-Process?
    ->  In node.js child process allows you to perform operations in separate processes, which can useful for CPU intensive tasks or when you need to interact with such system at lower level.

    -> With a child process, you can 4 things:
    1. exec: run any shell comand without communication
    2. execFile: you can run any compiled file(windows: .exe)
    3. spawn
    4. fork: light way to create a copy of a process(CPU intensive task)

 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const { fork } = require('node:child_process');

const app = express();

app.use(cors());


app.get('/fib', (req, res)=>{

  const {number, requestNumber} = req.query;

  if(!number || isNaN(number) || number <= 0) {
    return res.status(400).json({
      error: 'Please provide a positive number'
    })
  }

//   const ans = calculateFib(number);

const fibRes = fork(path.join(__dirname, 'fiboWorker.js'));

fibRes.send({number: parseInt(number)});

fibRes.on('message', (answer)=>{
  res.status(200).json({
    status: "success",
    message: answer,
    requestNumber
  })
})
});


app.listen(3000, ()=>{
    console.log('Server is up and running on 3000');
})