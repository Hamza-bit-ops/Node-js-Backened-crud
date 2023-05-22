const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  company: String,
  category: String,
});
module.export = mongoose.model("products", productSchema);
