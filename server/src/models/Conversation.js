import { Schema, model } from "mongoose";

const conversationSchema = new Schema({
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message",
        required: true,
        default: []
    }]
}, { timestamps: true })

const Conversation = model("Conversation", conversationSchema);

export default Conversation;
