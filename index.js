import express from "express";
import mongoose from "mongoose";
import User from "./models/user.model.js";

const app = express();
const PORT = 5000;

const MONGO_URI = "mongodb+srv://test-project:Test12345678@cluster0.x8bbexo.mongodb.net/"

const connectDB = async () => {
    try {
        mongoose.connect(MONGO_URI).then(()=>{
            console.log("Database connected!")
        })
    } catch (error) {
        console.log("database connection error : ", error)
    }
}

await connectDB()

app.use(express.json());

app.post("/user/register", async (req, res) => {
    const {name, email, password} = req.body;
    
    if(!name) return res.status(400).json({message: "Name is Required!"});
    if(!email) return res.status(400).json({message: "Email is Required!"});
    if(!password) return res.status(400).json({message: "Password is Required!"});
    if(password && password.length < 6) return res.status(400).json({message: "Password must have 6 character!"});

    const newUser = new User({
        name, email, password
    });

    await newUser.save();

    res.status(200).json({message: "User created!", newUser});
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});