import { Router } from "express";
import authService from "../services/authService.js";
import getError from "../utils/getError.js";

const authController = Router();

authController.get('/users', async (req, res) => {
    const loggedUserId = req.user._id;

    try {
        const users = await authService.getUsers(loggedUserId);
        return res.status(200).json(users);
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
    
})

authController.post('/register', async (req, res) => {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    try {
        
        const newUser = await authService.register(fullname, username, password, confirmPassword, gender);
        return res.status(201).json(newUser);
        
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error });
    }

})
authController.post('/login', async (req, res) => {
    const { username, password} = req.body;

    try {
        
        const user = await authService.login(username, password);
        return res.status(200).json(user);

    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})

authController.post('/logout', (req, res) => {
    try {
        authService.logout(res);
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})

export default authController;