import jwt from "../jwt.js";

async function generateJWT(user) {

    const payload = {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePicture: user.profilePicture,
    }

    const header = { expiresIn: '10d' };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, header)

    return {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePicture: user.profilePicture,
        accessToken: token
    }
}

export default generateJWT;