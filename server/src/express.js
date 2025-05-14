import express from 'express';
import authMiddleware from './middlewares/authMiddleware.js';
import routes from './routes.js';

const app = express();

app.use(express.json());

app.use(authMiddleware);

app.use(routes)

export { app }