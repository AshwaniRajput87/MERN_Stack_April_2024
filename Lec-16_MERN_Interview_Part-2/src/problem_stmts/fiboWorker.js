 const calculateFib = (num) => {
   if(num<=1) return num;

   return calculateFib(num-1) + calculateFib(num-2);
 }

 process.on('message', ({number})=> {
    const result = calculateFib(number);
    process.send(result);
 })