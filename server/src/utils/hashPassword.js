import bcrypt from "bcryptjs";
import { SALT_ROUNDS } from "../constants/constants.js";

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export default hashPassword;