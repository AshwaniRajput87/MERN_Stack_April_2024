# NodeJS Interview Prep - Part -1
  
     1. NodeJS modules
         - inbuilt modules (fs, http, path, os);
         - local modules (like passwordUtil where you exports the function, objects and use require to import the local modules) 
         - third party modules (socket.io, send grid, brevo, nodemailer, crypto, express)

     2. nodejs streams
     3. Child process
     4. Doing process the heavy tasks 


1. What is nodejs? What are the main feature of nodeJS?

   NodeJS:
   -------
   - Node.js is an open-source, server-side JavaScript runtime environment that  executes JavaScript code outside a web browser. 
   
   - It allows developers to build scalable network applications, leveraging event-driven, non-blocking I/O model for efficiency.
     
   - Node js is used to write the code for the server-side. It can be used to execute the script files.


Main Features of NodeJS:
------------------------
Some of the main features of Node.js include:

1. Asynchronous and event-driven: Node.js uses asynchronous, non-blocking I/O operations, making it lightweight and efficient for handling multiple concurrent connections.

2. Single-threaded and event loop: It uses a single-threaded event loop model to handle multiple connections asynchronously, making it highly scalable.

3. NPM (Node Package Manager): Node.js comes with npm, a package manager for installing, sharing, and managing third-party libraries and modules.

4. JavaScript runtime: Node.js allows developers to write server-side applications in JavaScript, enabling them to use the same language for both client-side and server-side development.

5. Cross-platform: Node.js applications can run on various operating systems, including Windows, macOS, and Linux, providing flexibility and portability.

7. High performance: Node.js is known for its high performance and low latency, making it suitable for building real-time web applications and APIs.

8. Extensive ecosystem: Node.js has a vast ecosystem of libraries, frameworks, and tools, providing developers with a wide range of options for building applications.

9. Built-in http server - to create http server and handle http req and send responses.


Browser vs NodeJS 
-----------------
   Browser:
      - Provides a runtime env for the client side JS, enables the interaction with the web pages(DOM manipulation), handling user event and rendering the content.

      - APIs and Global objects:
         - Web APIs : DOM, Fetch and web storage API etc and window object


   NodeJS:

      - Provides a server-side run-time env. It extends the capabilities to interact with the filesystem, perform the network operations and run the applications outside of a browser.

      - Node APIs : fs module, http module for creating a server, os etc and global object: global and process-specific object (process.env)