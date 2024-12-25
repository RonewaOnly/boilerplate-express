let express = require('express');
let app = express();
let process = require('dotenv').config();

app.use('/public', express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/views'));
// Log "Hello World" directly when the file runs
console.log("Hello World");

app.get('/', (req, res) => {
    //res.send("Hello Express"); // This sends "Hello World" as a response when the root route is accessed

    // Send the file at the given path
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/json', (req, res) => {
    
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message": "HELLO JSON"});
    }
    else{
        res.json({"message": "Hello json"});
    }
});




































 module.exports = app;
