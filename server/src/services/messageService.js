import Message from "../models/Message.js";
import Conversation from "../models/Conversation.js";

const messageService = {
    async sendMessage(senderId, receiverId, messageContent) {
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            messageContent
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        };
        return newMessage;
    }
}   

export default messageService;
