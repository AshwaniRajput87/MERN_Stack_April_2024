/***
  -> Let's discuss about node in depth.
    
*/
const dotenv = require('dotenv');
// console.log(global);
// console.log(process);



/* 
    what is process?
      -> process is a global object that provides you the information about and contorl over the current node.js process. It is one of the core modules and can be used without importing. 

*/

dotenv.config();

const { PORT } = process.env;

console.log(PORT);

// console.log(process.env);

console.log(process.cwd());

console.log(process.pid);

// standard input/output (non-blocking I/O);

console.log(process.stdin);
console.log(process.stdout);
console.log(process.stderr);


// Reference doc: https://github.com/sindresorhus/awesome-nodejs

