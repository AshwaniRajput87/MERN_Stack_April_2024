# Link : https://socket.io/docs/v4/tutorial/introduction

# <!-- socket io -->
    <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"
        integrity="sha384-mZLF4UVrpi/QTWPA7BjNPEnkIfRFn4ZEO3Qt/HFklTJBj/gBOV8G3HcKn4NfQblz"
        crossorigin="anonymous"></script>
        or
    <script src="socket.io/socket.io.js"></script>
    <script src="script.js"></script>
---------------------------------------------------------------------------

1. Websocket:

    Please refer the notes.

2. WS implementation:

    About Websocket: https://socket.io/docs/v4/

    server side -> use socket.io (https://socket.io/docs/v4/tutorial/introduction)

       1. to install socket.io for server side ->  yarn add socket.io

       2. To follow the steps of using ws: follow this link-> https://socket.io/docs/v4/tutorial/introduction

       3. Socket.IO is a JS library that enables low-latency, bidirectional and event-based communication between a client and a server.

    client side -> (Web socket API) https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API


    # How to build chat app?

      - refer the code

    # How to create rooms / group in web socket?

      - Socket.IO provides a powerful feature called "rooms" that allows you to organize sockets into different groups. 

      - Rooms are a way to segregate clients based on certain criteria, such as to allow users in a specific chat room. 

      - This makes it easy to broadcast messages to a subset of clients, rather than to every connected client.

      - refer the code

    