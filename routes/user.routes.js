import express from "express"
import { createUser, getAllUsers } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", createUser);
router.get("/get-all", getAllUsers);

export default router;
