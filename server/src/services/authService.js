import bcrypt from "bcryptjs";

import mongoose from "mongoose";

import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
import User from "../models/User.js"
import hashPassword from "../utils/hashPassword.js";
import generateJWT from "../utils/generateJWT.js";
import { io } from "../socketio.js";

const authService = {
    async register(fullname, username, password, confirmPassword, gender) {
        if (password !== confirmPassword) {
            throw new Error("Passwords must match!")
        };
        const user = await User.findOne({ username });

        if (user) {
            throw new Error("User already exists!")
        }

        const hashedPassword = await hashPassword(password);
        const profilePicUrl = `https://api.dicebear.com/9.x/adventurer/svg?seed=${username}&size=64&backgroundType=gradientLinear&earringsProbability=25&backgroundColor=ffdfbf,ffd5dc`

        const newUser = await User.create({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePicture: profilePicUrl
        });
        io.emit("newUser", newUser)
        return generateJWT(newUser);

    },
    async login(username, password) {
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error("User do not exists!")
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            throw new Error("Invalid password!")
        };
        return generateJWT(user);
    },
    async editProfile(userId, username, fullname) {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { username, fullname },
            {
                new: true,
                runValidators: true,

            }).select("-password");

        io.emit("updatedUser", updatedUser);
        return generateJWT(updatedUser);
    },
    async deleteProfile(userId) {

        const { ObjectId } = mongoose.Types;
        const userIdAsObjectId = ObjectId.createFromHexString(userId) // converting string id to objectId

        const success = await Promise.all(
            [
                User.findByIdAndDelete(userId),
                Message.deleteMany({ senderId: userIdAsObjectId, receiverId: userIdAsObjectId }),
                Conversation.deleteMany({ members: userIdAsObjectId })
            ] // find all messages and conversations
            //   related to the profile that is being deleted, then delete them as well from the db
        )
        if (success) {
            io.emit("deletedUser", userId)
        }
    },
    async getUsers(loggedUserId) {
        const users = await User.find({ _id: { $ne: loggedUserId } }).select("-password"); // excluding the logged in user and their passwords
        return users;
    }
}

export default authService;