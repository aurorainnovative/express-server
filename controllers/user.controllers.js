import User from "../models/user.model.js"

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) return res.status(400).json({ message: "Name is Required!" });
        if (!email) return res.status(400).json({ message: "Email is Required!" });
        if (!password) return res.status(400).json({ message: "Password is Required!" });
        if (password && password.length < 6) return res.status(400).json({ message: "Password must have 6 character!" });

        const isUserExist = await User.findOne({ email });
        if (isUserExist) return res.status(400).json({ message: "This email have already an account!" })

        const newUser = new User({
            name,
            email,
            password
        });
        await newUser.save();

        res.status(201).json({ message: "User created!", newUser });
    } catch (error) {
        console.log("User creating error : ", error)
        res.status(500).json({ message: "Internal server error. Please try again!" })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "All users!", users })
    } catch (error) {
        console.log("User getting error : ", error)
        res.status(500).json({ message: "Internal server error. Please try again!" })
    }
}