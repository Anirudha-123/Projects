// import express from "express";
// import { authMiddleware } from "../middleware/authMiddleware.js";
// import { getProfile } from "../controllers/profileController.js"; // Ensure this controller exists

// const router = express.Router();

// router.get("/", authMiddleware, getProfile); // Handle profile fetching

// export default router;


import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getProfile, updateProfile } from "../controllers/profileController.js"; // Ensure these functions exist in the controller

const router = express.Router();

// Route to get user profile
router.get("/", authMiddleware, getProfile);

// Route to update user profile
router.put("/", authMiddleware, updateProfile);

export default router;

