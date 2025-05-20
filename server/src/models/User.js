import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'Full name is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username is taken']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 5,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePicture: {
        type: String,
        default: ""
    }
}, { timestamps: true })


const User = model('User', userSchema)

export default User;