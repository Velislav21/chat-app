import { Router } from "express";
import authController from "./controllers/authController.js";
import messageController from "./controllers/messageController.js";

const routes = Router();

routes.use('/auth', authController)
routes.use('/message', messageController)   

export default routes;
