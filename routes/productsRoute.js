const express = require("express");

const {
  createProduct,
  getAllProducts, getAproduct, updateAproduct, deleteAproduct
} = require("../controllers/productsController");
const protect =require("../middlewares/authMiddleware")

const router = express.Router();

router.route("/").post(createProduct).get(getAllProducts);

router.route("/:_id").get(getAproduct).put(protect, updateAproduct).delete(protect, deleteAproduct)

module.exports = router;
