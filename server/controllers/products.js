import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import Product from "../models/product.js";

const getProducts = async (req, res) => {
  const allProducts = await Product.find({}).sort({ timestamp: -1 });
  if (allProducts) {
    res.status(200).json(allProducts);
  } else {
    res.status(404).json({ message: "Products not found" });
  }
};
const addProducts = async (req, res) => {
  const product = req.body;

  try {
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({ message: "New products Added" });
  } catch (err) {
    res.status(500).json({ message: "Products not Added" });
  }
};
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      { id: req.params.id },
      req.body
    );
    // const updatedProduct = await Product.findById(req.params.id);
    console.log("Product Updated:", updatedProduct);
    res.status(200).json({ message: "product Updated" });
  } catch (err) {
    res.status(500).json({ message: "product is not updated" });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    console.log("Product deleted:", deletedProduct);
    res.status(200).json({ message: "product deleted" });
  } catch (err) {
    res.status(500).json({ message: "can't able to delete product" });
  }
};

export { getProducts, addProducts, updateProduct, deleteProduct };
