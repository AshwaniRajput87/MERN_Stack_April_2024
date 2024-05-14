# 1. protect password or any sensitive information:

      Why?
       - To safeguard user privacy prevent the unauthorised access to sensitive data.

       - problem stmt-1:
          -> Storing the password in plain text in database exposes the user credentials which is a very sensitive informatin(PII).
          -> Solution: Encrypt the sensitive information
# 2. Adding Rate Limiting:
    - problem stmt:
       - DoS(Denial of Services) attack: Email or SMS flood.
    - Solution:
      - Rate Limiting: a technique to control the number of requests or actions a user can perform.
      - To implement it, you need express-rate-limit:

         yarn add express-rate-limit
# 3. How to add required headers?

     - res.setHeader('Access-Control-Allow-origin', '*');
     - res.setHeader('x-api-key', 'hgsafd37246378v72343');

# No SQL injection:

  - problem statement:
     - NoSQL injection occurs When untrusted data is improperly handled in NoSQL database queries which leads to allow unauthorised access or data manipulation.

     - Solution:
        - To prevent it, sanitize the user data, validate data, and use parameterized queries in express.js to separate the data from commands and avoid execution of malicious activities.



# Preventing the XSS(Cross site scripting): 

   - When user input is having HTML or Javascript code which is rendering directly on to the client side or getting the payload from req object of middleware.

   - need to install and use xss package.
       - yarn add xss
