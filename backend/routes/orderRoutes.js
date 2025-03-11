import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  placeOrder,
  getMyOrders,
  updateOrder,
  deleteOrder,
  getAllOrders
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", authMiddleware, placeOrder);
router.get("/myorders", authMiddleware, getMyOrders);
router.put("/:id", authMiddleware, updateOrder);
router.delete("/:id", authMiddleware, deleteOrder);
router.get("/admin-orders", authMiddleware, getAllOrders);

export default router;
