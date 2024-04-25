# What is mongodb queries?

   - operations performed to retrieve, store or analayse the data from mongodb database.

   - specify the critera to filter out the documnents what to return /filter the data.

   - you can fire the mongodb queries directly in mongodb itself:
       {"price": {$gt:20000}}

   - refernce doc for mongodb queries: https://www.mongodb.com/docs/manual/reference/operator/query


# What is aliasing? how does it help?

 - refers as a technique that is used to simplify or give you more meaninful names to routes

 - eg: api/products?filter={"price": {"lt": 13.5}} -> api/products/cheapest
       api/products?filter={"price": {"gt": 500000}} -> api/products/expensive

- a billion day sales is going:

    - you need to create a big billion day sales page with all offerings

    - then also you need to create a end point /bigBillionDay
      
         - products whose stock are less than 5
         - ratings more than 4.8
         - categories all elecronics


// Homework:

    - feed the product data into mongodb: https://fakestoreapi.com/products

    - https://jsonviewer.stack.hu/ - formated data

    - Create login and signup page