import mongoose from "mongoose"

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

export default connectDB;