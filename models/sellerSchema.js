const mongoose = require("mongoose");

const sellersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },

  accountbalance: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  store: {
    type: Array(stores),
    required: false,
  },
});

const Seller = mongoose.model("Seller", sellersSchema);

module.exports = Seller;
