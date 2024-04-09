/**
   1. What is backend  development? why is it required?

    - Backend is responsible for mananging and processing the data as well handling the bussiness logic of an application.

    - It works behind-the-scene of a S/W application that the end user won't able to see but it is crucial for the writing the bussiness logic.


    - responsibilities of backend:

       1. Business Logic
       2. Data Management
       3. API development
       4. Server-side processing
       5. Security
       6. Scalability
       7. Integration

       web apps -> client side development + server  side development + database


    2. What is nodeJS and What does it provide?

        - It's an open-source, cross-platform runtime enviroment that helps you to execute JS code on server that means outside the browser.

        - nodeJS created by Ryan Dahl and released first version of it in 2009 

        - NodeJS can help to build:
           1. web applications
           2. API development
           3. real time applications
           4. CMS (Content Management System)
           5. Serverless Functions

    3. browser vs NodeJS Env

        Browser:
           - a client-side env
           - Executes the JS code within the browsers
           - used for frontend development
           - Allow the devs to do the DOM manipulation and perfom async operations


        NodeJS: 
           - a server-side env
           - Executes the JS code on the servers
           - used for backend development
           - Allows devs to build REST APIs, performs I/O operations, retrieve data over the network, data management(Mongodb) but logic will be written in nodeJS env

    4. NodeJS installation: https://nodejs.org/en

    5. What are the modules in NodeJS?

        - NodeJS comes with set of built-in modules that provide essential functionalities for certain specific tasks.

        - Built-in modules that will be used majorly:

        1. fs(File System): helps to interact with files like read and write operation in the files.
        2. path: if you need to work on file path or directory system, then path module is going to be used. It helps to resolve and normalising the paths on different OS.
        3. http: it helps to create HTTP servers and help to serve any request and response from the servers.
        4. os: provides the utility method for getting the OSand CPU  informations.
        5. events: Helps to implement the event based programming.
        6. ws(web socket module): helps you to implement the websockets.


        Prerequisite for nodeJS:

        - async programming (callback, promise, how to use promise, fetch API, async/await)
        - functional programming and basics of JS

    How to create a server and send the response?
    1. use http module to create a server.
    2. generate a response either in plain text or HTML or JSON and send to client from the server.
    3. server has to be up and running on your local machine and listen on the hostname and port


 */