# Quick recap of LEc-1 (nodeJS and backend development):

  1. What is backend develoment? why is it required?
      - backend is responsible for for sending, managaing and processing the data as well as handling the business logic of an application.
      - it works behind-the-scene of a S/W application the end user doesn't see anything but it is crucial for writing the business logic.
      - responsibilities of BE development:
         - Business logic
         - Data Management
         - API development
         - server-side processing
         - security
         - scalability 
         - Integration (third-party APIs or system(Likewise razorpay, stripe)) 

   2. Web apps = client-side development + server-side development + database 

   3. What is nodeJS? What does it provide?

       - open-source, cross-platform runtime env where you can execute your JS code on the server without requiring the browser.
       - Ryan Dhal and release it first version in 2009.
       - Node JS helps you to build:
          - web apps
          - APIs
          - real time apps
          - CMS
          - Serverless functions: to run code without managing server infrastructure.

   4. download node JS: https://nodejs.org/en/download

   5. NodeJS provide the modules:
       - fs
       - path
       - http
       - os
       - ws(web socket)
   6. HTTP module:

        - how to create server and send the response?
        - refer code of Lec-1

   7. Brush up the JS concepts:

      - async programming (callbacks, promises, asnyc/await)
      - basic concepts of JS
      - Fuctional Programming

-------------------------------------------------------------------

# What is nodemon?

   - nodemon is a helpful tool for developing nodeJS apps. 
   - it automatically restarts the node server whenever the changes will detecting inside any file.
   - npm i -g nodemon or yarn global add nodemon
   - install nodemon in package.JSON: yarn add nodemon -D or yarn add nodemon --save-dev

# package.json

   - it helps you to manage these things:

      1. Dependency management.
      2. Script Management
      3. Project Metadata
      4. configuration Options.
      5. Version Management (release a web app version-> semantic versioning(SemVer) -> major.minor.patch -> 2.0.0) 

    - To create the package.json file
        npm init or yarn init

    - ExpressJS:
      - minimal and flexible nodeJS web application framework that provides you a robust and simplify features of web and mobile applications.

      - ExpressJS is wrapper of HTTP module of nodeJS.

      - can we use expressJS without nodeJS?

         - No, because it's wrapper that it is being written over nodeJS 

      - To use expressJS framework you need to install express:

          npm i express or yarn add express

    - Develop REST(Representational Satte Transfer) API or RESTful API or endpoints or APIs:

       - CURD operations: (For users)

          1. CREATE: POST(HTTP Method)

            /api/user -> to create a user {some data has to send as a payload}

          2. READ: GET(HTTP Method)

            /api/users or /api/user/1 -> to get or read the data 

          3. Update/Edit: PATCH/PUT (HTTP Method)

            /api/update/user -> to update the user

          4. Delete: DELETE (HTTP Method)

            /api/delete/user -> to delete a user
                

           





