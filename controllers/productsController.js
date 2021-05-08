const { json } = require("express");
const Product = require("../models/productsSchema");

// adding a new products

const createProduct = async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    details: req.body.details,
  });

  await newProduct.save();
  res.status(201).json(newProduct);
};

// get all poducts
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// get a product
const getAproduct = async (req, res) => {
  const product = await Product.findById(req.params._id);
  res.json(product);
};

// update a product
const updateAproduct = async (req, res) => {
  const foundproduct = await Product.findById(req.params._id);

  if (foundproduct) {
    foundproduct.name = req.body.name;
    foundproduct.price = req.body.price;
    foundproduct.details = req.body.details;

    const updatedProduct = await foundproduct.save();
    res.json({ updatedProduct });
  }
};

// delete A product
const deleteAproduct = async (req, res) => {
  const foundproduct = await Product.findById(req.params._id);
  if (foundproduct) {
    foundproduct.remove();
    res.json({ msg: `${foundproduct.name} remove` });
  } else {
    res.status(404).json({ error: "product not found" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getAproduct,
  updateAproduct,
  deleteAproduct,
};
