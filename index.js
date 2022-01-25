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
    console.log(`User Connected: ${socket.id}`);

    socket.on('join_presentation', data => {
        socket.join(data);
        console.log(`User Joined Presentation: ${socket.id}; ${data}`)
    });
    
    socket.on('set_next_slide', data => {
        socket.broadcast.emit('next_slide', data);
        console.log(`Changed slide to: ${data}`);
    });
});

server.listen(3004, () => {
    console.log('Listening on port 3004');
});
