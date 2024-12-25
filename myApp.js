let express = require('express');
let app = express();
require('dotenv').config(); 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/views'));
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next(); // Continue to the next middleware or route handler
  });
  
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
app.get('/now', function(req, res, next) {
    req.time = new Date().toString();  // Add current time to request object
    next();  // Pass control to the next middleware or handler
  }, function(req, res) {
    res.json({time: req.time});  // Send the time as a JSON response
  });
  app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word });
  });
  app.route('/name')
  .get((req, res) => {
    res.json({ name: `${req.query.first} ${req.query.last}` });
  })
  .post((req, res) => {
    // Handle POST request
    res.json({ name: `${req.body.first} ${req.body.last}` });
  });
  app.post('/submit', (req, res) => {
    console.log(req.body.name); // John Doe
    console.log(req.body.last);  // 25
    res.send('Data received!');
  });
  
  



































 module.exports = app;
