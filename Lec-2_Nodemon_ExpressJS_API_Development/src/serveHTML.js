const http = require('http');


const server = http.createServer((req, res)=>{
  
  const htmlTemplateStr = `
            <html>
               <head></head>
               <body>
                    <h1>Hello in NodeJS HTTP module world and observing via nodemon!</h1>
               </body>
            </html>
  `;

  res.write(htmlTemplateStr);

  res.end();

});

const port = 8080;
const hostname = 'localhost';

server.listen(port, hostname, ()=>{
    console.log(`Server is up and running on http://${hostname}:${port}`)
})