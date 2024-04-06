import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// UPDATE
router.put("/:id", verifyToken, update);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/find/:id", getUser);

// SUBSCRIBE
router.put("/sub/:id", subscribe);

// UNSUBSCRIBE
router.put("/unsub/:id", unsubscribe);

// LIKE
router.put("/like/:id", like);

// DISLIKE
router.put("/dislike/:id", dislike);

export default router;
