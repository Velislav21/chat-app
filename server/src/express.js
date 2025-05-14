import express from 'express';

import cors from "cors";

import authMiddleware from './middlewares/authMiddleware.js';
import routes from './routes.js';

const app = express();

app.use(cors({
    origin: "*",
    credentials: true,
}))

app.use(express.json());

app.use(authMiddleware);

app.use(routes)

export { app }