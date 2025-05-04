import User from "../models/User.js"
import bcrypt from "bcryptjs";
import { PROFILE_PIC_URL, SALT_ROUNDS } from "../constants/constants.js";

const authService = {
    async register(fullName, username, password, confirmPassword, gender) {
        try {
            if (password !== confirmPassword) {
                throw new Error("Passwords must match!")
            };
            const user = await User.findOne({ username });

            if (user) {
                throw new Error("User already exists!")
            }

            const salt = await bcrypt.genSalt(SALT_ROUNDS);
            const hashedPassword = await bcrypt.hash(password, salt);

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
        } catch (err) {
            throw err;
        }
    }
}

export default authService;