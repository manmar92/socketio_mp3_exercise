var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

const PORT = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('sound', function () {
        fs.readFile(__dirname + '/winxp.mp3', function (err, buf) {
            socket.broadcast.emit('sound', buf);
        });
    });
});

http.listen(3000, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});  