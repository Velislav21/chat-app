import { server } from './socketio.js'

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
 
const PORT = process.env.PORT || 8080;

server.listen(PORT, async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('connected to db')
    } catch (error) {
        console.log(error.message)
    }
    console.log(`server is listening on port ${PORT}`)
})