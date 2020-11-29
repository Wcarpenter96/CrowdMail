const express = require('express');
const app = express();

// This is a route handler
// "get" is the method (associated with an intent)
// '/' is the route
app.get('/', (req,res)=> {
    res.send({hi:'there'});
});

const PORT  = process.env.PORT || 5000
app.listen(PORT);