import { Router } from "express";
import authService from "../services/authService.js";
import getError from "../utils/getError.js";

const authController = Router();

authController.post('/register', async (req, res) => {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    try {
        const newUser = await authService.register(fullName, username, password, confirmPassword, gender)
        res.status(201).send({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePicture: newUser.profilePic,
        })
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }

})

export default authController;