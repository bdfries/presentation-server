// Initial Commit
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3002',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', socket => {

});

server.listen(3004, () => {
    console.log('Listening on port 3004');
});
