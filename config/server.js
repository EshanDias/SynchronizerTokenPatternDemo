'user strict';
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
var app = express();

const hostname = 'localhost';
const port = '4000';

app.use(bodyParser());
// Get the routes
app.use('/', routes);

app.use(express.static(__dirname + '../../src/view'));
app.listen(port, hostname);
console.log(`Server running on http://${hostname}:${port}`);

