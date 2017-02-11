var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var logger = require('morgan');
var routes = require('./routes');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

routes(app);

var users = {};
var server = http.createServer(app);
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
    // 有人上线
    socket.on('online', function(data) {
        socket.name = data.user;
        io.emit('online', {users:users, user:data.user});
    });

    // 有人说话
    socket.on('say', function(data) {
        if (data.to == 'all') {
            socket.broadcast.emit('say', data);
        } else {
            var clients = io.sockets.clients();
            clients.forEach(function(client) {
                if (client.name == data.to) {
                    client.emit('say', data);
                }
            });
        }
    });

    // 有人下线
    socket.on('disconnect', function() {
        socket.broadcast.emit('offline', {users:users, user:socket.name});
    });
});

server.listen(app.get('port'), function() {
    console.log('Express has listening in port : ' + app.get('port'));
});
