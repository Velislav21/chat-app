import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes.js";
import authMiddleware from "./middlewares/authMiddleware.js";
dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(express.json());

app.use(authMiddleware);
app.use(routes);

app.listen(PORT, async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('connected to db')
    } catch (error) {
        console.log(error.message)
    }
    console.log(`server is listening on port ${PORT}`)
})