import Message from "../models/Message.js";
import Conversation from "../models/Conversation.js";
import { getReceiverSocketId, io } from "../socketio.js";

const messageService = {
    async sendMessage(senderId, receiverId, messageContent) {
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId]
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            messageContent
        })
        // !TODO socket.io ...
        if (newMessage) {
            conversation.messages.push(newMessage._id);
            await conversation.save();
        };

        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        return newMessage;
    },
    async getMessages(senderId, receiverId) {
        const conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        }).populate('messages');

        if (!conversation) {
            return [];
        }
        
        return conversation.messages;
    }
}   

export default messageService;
