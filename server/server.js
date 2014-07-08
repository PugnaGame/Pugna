var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/../public'));

var port = 3000;
http.listen(port, function() {
    console.log('server listening on port ' + port);
});

io.on('connection', function(socket) {
    socket.on('msg', function(data) {
        socket.emit('answer', {
            res: "Message recieved"
        });
        console.log(data);
    });

    setInterval(function() {
        socket.broadcast.emit('ping', {
            res: "Ping"
        });
    }, 3000);
});

/*
 var http = require('http')
 , sys  = require('sys');
 
 var header = {
 "Content-Type": "text/html"
 };
 
 // Handle incoming requests
 var app = http.createServer( function( request, response ) {
 
 sys.puts("Incoming request! Woo!");
 response.writeHeader(200, header);
 response.write("<h1>Hello world!</h1>");
 response.end();
 
 });
 
 // Listen for incoming requests on port 3000
 app.listen(3000);
 */
