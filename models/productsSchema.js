const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter product name"],
    },

    price: {
      type: String,
      required: [true, "Enter product price"],
    },

    details: {
      type: String,
      required: [true, "Enter product description"],
    },
    images: [
      {
        products: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;
