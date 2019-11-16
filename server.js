const express = require('express');
const app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);


// Settings for CORS
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

io.on('connection', (socket) => {

    socket.on('CHECK_USER_NAME', () => {
        socket.broadcast.send('VERIFY_USER_NAME', true);
    })
});
