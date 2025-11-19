import express from "express";
import userRouter from "./routes/user.routes.js";
import connectDB from "./database/connectDB.js";

const app = express();
const PORT = 5000;

await connectDB()

app.use(express.json());

app.use("/user", userRouter)

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});