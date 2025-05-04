import { Router } from "express";
import getError from "../utils/getError.js";

const messageController = Router();

messageController.post('/send/:id', (req, res) => {
    const { id } = req.params;
    const { senderId } = req.userId;
    const { message } = req.body;

    try {
        
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }

})

export default messageController;
