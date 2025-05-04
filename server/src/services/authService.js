import User from "../models/User.js"
import bcrypt from "bcryptjs";
import { PROFILE_PIC_URL, SALT_ROUNDS } from "../constants/constants.js";
import hashPassword from "../utils/hashPassword.js";

const authService = {
    async register(fullName, username, password, confirmPassword, gender) {
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
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePicture: gender === "male" ? maleProfilePic : womenProfilePic
        });
        return newUser;

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
        return user;
    },
    logout(res) {
        try {
            res.clearCookie("jwt");
            res.status(200).json({ message: "Logged out successfully!" });
        } catch (err) {
            throw new Error("Failed to logout!")
        }
    }
}

export default authService;