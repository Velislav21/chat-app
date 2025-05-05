import { Router } from "express";
import getError from "../utils/getError.js";
import messageService from "../services/messageService.js";

const messageController = Router();

messageController.post('/send/:id', async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        const { message } = req.body;
        console.log(receiverId)
        console.log(senderId)

        const newMessage = await messageService.sendMessage(senderId, receiverId, message);
        return res.status(201).json(newMessage);

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }

})

export default messageController;
