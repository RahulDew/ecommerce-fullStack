import express from "express";

import {
  getProducts,
  addProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";
const router = express.Router();

router.get("/products", getProducts);
router.post("/products", addProducts);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
