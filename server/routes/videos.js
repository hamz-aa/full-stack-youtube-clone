import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getBySearch,
  getByTags,
  getVideo,
  random,
  subscribed,
  trend,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// CREATE VIDEO
router.post("/", verifyToken, addVideo);

// UPDATE VIDEO
router.put("/:id", verifyToken, updateVideo);

// DELETE VIDEO
router.delete("/:id", verifyToken, deleteVideo);

// GET VIDEO
router.get("/find/:id", getVideo);

// INCREASE VIEWS
router.put("/view/:id", addView);

// GET TRENDING VIDEOS
router.get("/trend", trend);

// GET RANDOM VIDEOS
router.get("/random", random);

// GET SUBSCRIBED CHANNEL VIDEOS
router.get("/sub", verifyToken, subscribed);

// GET VIDEOS BY TAGS
router.get("/tags", getByTags);

// GET VIDEOS BY TITLE
router.get("/search", getBySearch);

export default router;
