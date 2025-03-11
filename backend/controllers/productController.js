

// import Product from "../models/productModel.js";

// // Fetch all products
// export const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products" });
//   }
// };

// // Fetch single product by ID
// export const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching product" });
//   }
// };

// // Add a product (Admin only)
// export const addProduct = async (req, res) => {
//   try {
//     const { name, price, image, description } = req.body;
//     const newProduct = new Product({ name, price, image, description });
//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ message: "Error adding product" });
//   }
// };

// // Update product (Admin only)
// export const updateProduct = async (req, res) => {
//   try {
//     const { name, price, image, description } = req.body;
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       { name, price, image, description },
//       { new: true }
//     );

//     if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

//     res.json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating product" });
//   }
// };

// // Delete product (Admin only)
// export const deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting product" });
//   }
// };


import Product from "../models/productModel.js";

// Fetch all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Fetch single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// Add a product (Admin only)
export const addProduct = async (req, res) => {
  try {
    const { name, price, image, description } = req.body;

    if (!image) {
      return res.status(400).json({ message: "Image URL is required" });
    }

    const newProduct = new Product({ name, price, image, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }
};

// Update product (Admin only)
export const updateProduct = async (req, res) => {
  try {
    const { name, price, image, description } = req.body;

    if (!image) {
      return res.status(400).json({ message: "Image URL is required" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, image, description },
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};

// Delete product (Admin only)
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

