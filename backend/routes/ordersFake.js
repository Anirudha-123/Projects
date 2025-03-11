


import express from "express";
import Order from "../models/Order.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Place an order
router.post("/", authMiddleware, async (req, res) => {
  const { products, totalAmount } = req.body;
  try {
    const order = new Order({
      user: req.user._id,
      products,
      totalAmount,
      status: "Pending" // default status, for example
    });
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get orders for the logged-in user
router.get("/myorders", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update an order (for admin)
router.put("/:id", authMiddleware, async (req, res) => {
  console.log("Updating order with id:", req.params.id);
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      console.log("Order not found");
      return res.status(404).json({ message: "Order not found" });
    }
    // For example, update order status from req.body
    order.status = req.body.status || order.status;
    // Add additional fields to update if needed
    await order.save();
    console.log("Order updated successfully");
    res.json(order);
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete an order
router.delete("/:id", authMiddleware, async (req, res) => {
  console.log("Deleting order with id:", req.params.id);
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      console.log("Order not found");
      return res.status(404).json({ message: "Order not found" });
    }
    console.log("Order deleted successfully");
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Server error" });
  }
});


router.post('/place', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: 'Order placed successfully' });
});

router.get('/admin-orders', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});


export default router;

