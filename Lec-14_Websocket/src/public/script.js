 const socket = io();

 const btn = document.getElementById('send');
 const input = document.getElementById('msg');
 const ul = document.getElementById('list');
 const createGrpBtn = document.getElementById('createGrp');
const joinGrpBtn = document.getElementById('joinGrp');
const stgBtn = document.getElementById('stg');
const leaveGrp =document.getElementById('leave_grp');

 btn.addEventListener("click", ()=>{
    const value = input.value;

    if(value.length){

        const div = document.createElement('div');
        div.setAttribute('class', 'sender');

        const li = document.createElement('li');
        li.innerText = value;

        const para = document.createElement('p');
        para.innerText = 'sender'

        div.appendChild(para);
        div.appendChild(li);

        ul.appendChild(div);

        socket.emit("message", value);

        input.value = '';

    }
 });

 socket.on("broadcast", (msg)=>{

    console.log(msg);

    const div = document.createElement('div');
    div.setAttribute('class', 'reciever');

    const li = document.createElement('li');
    li.innerText = msg;

    const para = document.createElement('p');
    para.innerText = 'reciever'

    div.appendChild(para);
    div.appendChild(li);

    ul.appendChild(div);
 });

 createGrpBtn.addEventListener('click', ()=>{
   console.log('created a group');
   socket.emit('create_grp', Math.floor(Math.random(0,1)*1000));
 });

 joinGrpBtn.addEventListener('click', ()=>{
   console.log('Group has been joined');
   socket.emit('join_grp');

 });

 stgBtn.addEventListener('click', ()=>{
   let value = input.value;

   if(value.length) {
      socket.emit("grp_msg", value);
   }

 });

 socket.on('serv_grp_msg', (data)=>{

    const div = document.createElement('div');
    div.setAttribute('class', 'reciever');

    const li = document.createElement('li');
    li.innerText = data;

    const para = document.createElement('p');
    para.innerText = 'reciever'

    div.appendChild(para);
    div.appendChild(li);

    ul.appendChild(div);

 });

 // How to leave a group, complete this as assigment.
 leaveGrp.addEventListener('click', ()=>{
   // write your logic here
 });






//   socket.on("message", (data)=>{
//     console.log("Recieving mesage->", data)
//   });