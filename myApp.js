let express = require('express');
let app = express();

app.use('/views', express.static(__dirname + '/views'));
// Log "Hello World" directly when the file runs
console.log("Hello World");

app.get('/', (req, res) => {
    //res.send("Hello Express"); // This sends "Hello World" as a response when the root route is accessed

    // Send the file at the given path
    res.sendFile(__dirname + '/views/index.html');
});





































 module.exports = app;
