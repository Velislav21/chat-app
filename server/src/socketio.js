import http from 'http';
import { Server } from "socket.io";

import { app } from './express.js'

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})


io.on('connection', (socket) => { // socket -> connected user
    console.log('user connected', socket.id);



    socket.on('disconnect', () => console.log('user disconnected', socket.id))
})

export {
    io,
    server
} 