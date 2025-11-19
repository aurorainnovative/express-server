import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is Required!"],
        trim: true
    }
});

const User = mongoose.model("User", userSchema);

export default User;