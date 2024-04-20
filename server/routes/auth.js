import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router();

// CREATE A USER
router.post("/signup", signup);

// SIGN IN
router.post("/signin", signin);

// GOOGLE AUTHENTICATION
router.post("/google", googleAuth);

export default router;
