

// import express from "express";
// import { 
//   getProducts, 
//   addProduct, 
//   deleteProduct, 
//   updateProduct, 
//   getProductById 
// } from "../controllers/productController.js";
// import { authMiddleware, adminMiddleware } from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Public Routes
// router.get("/", getProducts);
// router.get("/:id", getProductById);

// // Admin Routes (Protected)
// router.post("/", authMiddleware, adminMiddleware, addProduct);
// router.put("/:id", authMiddleware, adminMiddleware, updateProduct);
// router.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);

// export default router;


import express from "express";
import { 
  getProducts, 
  addProduct, 
  deleteProduct, 
  updateProduct, 
  getProductById 
} from "../controllers/productController.js";
import { authMiddleware, adminMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin Routes (Protected)
router.post("/", authMiddleware, adminMiddleware, addProduct);
router.put("/:id", authMiddleware, adminMiddleware, updateProduct);
router.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);

export default router;

