 const socket = io();

 const btn = document.getElementById('send');
 const input = document.getElementById('msg');
 const ul = document.getElementById('list');

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
 })


//   socket.on("message", (data)=>{
//     console.log("Recieving mesage->", data)
//   });