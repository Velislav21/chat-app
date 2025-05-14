import http from 'http';
import { Server } from "socket.io";

import { app } from './express.js'

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

const users = {};

io.on('connection', (socket) => { // socket -> connected user
    console.log('user connected', socket.id);

    const userId = socket.handshake.query.userId;

    if (userId) {
        users[userId] = socket.id
    }

    io.emit("getOnlineUsers", Object.keys(users))

    socket.on('disconnect', () => {
        console.log("user disconnected", userId)
        delete users[userId];
        io.emit("getOnlineUsers", Object.keys(users))

    })
})

export {
    io,
    server
} 