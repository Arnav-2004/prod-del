import productModel from "../models/productModel.js";
import fs from "fs";

// add product
const addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const product = new productModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await product.save();
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add product" });
  }
};

// list all products
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to fetch products" });
  }
};

// remove product
const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    fs.unlink(`uploads/${product.image}`, () => {});
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to remove product" });
  }
};

export { addProduct, listProduct, removeProduct };
