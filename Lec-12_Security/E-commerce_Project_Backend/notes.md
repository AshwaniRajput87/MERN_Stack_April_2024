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

         yarn add expres-rate-limit