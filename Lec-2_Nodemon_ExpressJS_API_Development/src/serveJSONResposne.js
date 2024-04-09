const http = require('http');


const server = http.createServer((req, res)=>{
  
  const jsonResponse = {
    id: 1,
    name: 'Herman',
    date: new Date()
  }

  res.write(JSON.stringify(jsonResponse));

  res.end();

});

const port = 8080;
const hostname = 'localhost';

server.listen(port, hostname, ()=>{
    console.log(`Server is up and running on http://${hostname}:${port}`)
})