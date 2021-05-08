const mongoose = require("mongoose");

const storeSchema = mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  accountbalance: {
    type: String,
    required: true,
  },
  catalogue: {
    type: Array(products),
    required: true,
  },
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
