const express = require('express')

const app= express();
const port = 4000;

const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');


//serve static files
app.use('/static', express.static('public'));

//routing in express
app.use('/', indexRoute);
app.use('/about', aboutRoute);

// app.get('/', (req,res) => res.send("Hello World"));
app.listen(port, () => console.log('Hello World Running!'));
