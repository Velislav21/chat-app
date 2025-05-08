import bcrypt from "bcryptjs";

import User from "../models/User.js"
import hashPassword from "../utils/hashPassword.js";
import generateJWT from "../utils/generateJWT.js";

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
        return generateJWT(newUser);

    },
    async login(username, password) {
        const user = await User.findOne({ username });
        console.log(username)
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