# CrowdMail

A highly customizable self-service survey and analytics provider
https://shielded-sierra-95163.herokuapp.com/

## Get Started

1. Log in to the app with your Google Account 
4. Click the "+" button on the bottom right or the "Create New" tab in the right drawer
5. Enter your survey title, subject, body, and recipient list. The recipient list should be a list of emails separated by commas.
6. Click "Next" and review your information. 
7. If everything looks correct, click "Send Survey" to send the emails to the recipient list. Click the left arrow next to "Please confirm your entries" to go back.
8. You should now see the new survey on your dashboard. Click on the survey for additional information. 

## Adding Credits

One survey costs one credit. The credit card provider is in test mode only:

1. Click the "Add Credits" button
2. Enter the values below to get 5 email credits and click "Pay $5.00". You should now see "Credits: 5" next to the "Add Credits" button.

| Field | Value |
| ----------- | ----------- |
| Email | test@test.com |
| Card Number | 4242 4242 4242 4242 |
| MM / YY | 12/21 |
| CVC | 123 |

(Read more about Stripe test credit cards [here](https://stripe.com/docs/testing))

3. You should now see five additional credits added to your account.

## About this Application

### Technology Stack 
This Web Application uses the MERN (Mongo Atlas, Express.js, React, Node.js) stack.
### Back-end libraries
- OAuth: passport-google-oauth20
- Email Handling: sendgrid 
- Payments: stripe 
- Database Queries: mongoose
### Front-end libraries
- Interface: material-ui
- State Handling: redux
- Middlewares: redux-thunk
- Charts: recharts

Please refer to package.json and client/package.json for additional dependencies.
