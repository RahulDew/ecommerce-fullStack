import express from "express";
import { signup, login, getUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", getUser);

export default router;
