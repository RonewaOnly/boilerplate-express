let express = require('express');
let app = express();

// Log "Hello World" directly when the file runs
console.log("Hello World");

app.get('/', (req, res) => {
    res.send("Hello World"); // This sends "Hello World" as a response when the root route is accessed
});





































 module.exports = app;
