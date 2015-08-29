'use strict';


var express = require('express'),
	bodyParser = require('body-parser');

var data = {},
	id = 0,
	app = express();

//------------------------------------------------------------------------------
// Server
// Server
//------------------------------------------------------------------------------

app.use(bodyParser());


app.use(express.static(__dirname + '/public')).listen(9898);
console.log('Started listening on port 9898');
