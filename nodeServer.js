
// set up ========================
var express  = require('express');
var http = require('http');
var path = require('path');
var app  = express();   // create our app w/ express
var port = 8080			// set our port
var server = http.createServer(app);

// Configure static ressources
app.use('/', express.static('src/client/'));
app.use('/vendor/', express.static('bower_components/'));

//console.log('dirname : ' + __dirname);

// ROUTES FOR OUR API
// =============================================================================
app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

app.get('/', function(req, res) {
    res.sendFile('src/client/index.html', { root: __dirname });
});

// START THE SERVER
// =============================================================================
server.listen(port, 'localhost');

// Success log message
server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
