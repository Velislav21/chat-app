import User from "../models/User.js"

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

            const maleProfilePic = `${process.env.PROFILE_PIC_URL}/public/boy?username=${username}`;
            const womenProfilePic = `${process.env.PROFILE_PIC_URL}/public/girl?username=${username}`;
            const newUser = await User.create({
                fullName,
                username,
                password,
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