import { app, server } from './socketio.js'

import dotenv from "dotenv";
import mongoose from "mongoose";

import routes from "./routes.js";
import authMiddleware from "./middlewares/authMiddleware.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(authMiddleware);

app.use(routes);

server.listen(PORT, async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('connected to db')
    } catch (error) {
        console.log(error.message)
    }
    console.log(`server is listening on port ${PORT}`)
})