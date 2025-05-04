import jwt from "jsonwebtoken";

function generateJWT(userId, res) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "10d" });
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 10 * 24 * 60 * 60 * 1000,
           //    d   h    m    s     ms
        sameSite: "strict"   
    });
}

export default generateJWT;