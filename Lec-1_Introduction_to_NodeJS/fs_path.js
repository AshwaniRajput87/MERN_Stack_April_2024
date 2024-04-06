const fs = require('fs');

fs.readFile('f2.txt', 'utf-8', (err, data)=>{
  if(err){
    console.log(err);
  }

  console.log(data);
});


/** WAP to implement these following operations:
    1. writing the content inside the file.
    2. copying the content of a file into another file.
*/

