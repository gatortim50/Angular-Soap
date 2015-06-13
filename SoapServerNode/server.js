var express = require('express'),
  soap = require('soap'),
  bodyParser = require('body-parser'),
  morgan     = require('morgan'),
  methodOverride = require('method-override'),
  cors = require('cors');

var zip = require('./routes/zip');

var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(methodOverride());

// invoke methods in routes/zip.js
app.get('/zip', zip.findZipCode);     // http://127.0.0.1:3000/zip
app.get('/zip/:zipcode', zip.findByZipCode);  // http://127.0.0.1:3000/zip/30115


var port = 3000;
app.listen(port);
console.log('Back End Server running at http://127.0.0.1:' + port);
