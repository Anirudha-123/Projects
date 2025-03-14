import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true }
});

// Prevent overwriting the model
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
