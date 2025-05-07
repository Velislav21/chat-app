import bcrypt from "bcryptjs";

import User from "../models/User.js"
import hashPassword from "../utils/hashPassword.js";
import generateJWT from "../utils/generateJWT.js";
import { PROFILE_PIC_URL } from "../constants/constants.js";

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

        const maleProfilePic = `${PROFILE_PIC_URL}/public/boy?username=${username}`;
        const womenProfilePic = `${PROFILE_PIC_URL}/public/girl?username=${username}`;

        const newUser = await User.create({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePicture: gender === "male" ? maleProfilePic : womenProfilePic
        });
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
    async getUsers(loggedUserId) {
        const users = await User.find({ _id: { $ne: loggedUserId } }).select("-password"); // excluding the logged in user and their passwords
        return users;
    }
}

export default authService;