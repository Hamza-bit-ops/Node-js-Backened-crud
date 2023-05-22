const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/Pharma")
  .then(() => {
    console.log("Connected to MongoDB");
    // main();
    updateInDB();
    // deleteInDB();
    // findInDB();
  })
  .catch((e) => {
    console.log("not connected");
  });
const productSchema = new mongoose.Schema({
  name: String,
  company: String,
});
const main = async () => {
  const ProductModel = mongoose.model("pfizers", productSchema);
  let data = new ProductModel({
    name: "Sumair",
    company: "Bits",
  });
  try {
    const result = await data.save();
    console.log(result);
  } catch (error) {
    console.error("Failed to save data to MongoDB:", error);
  }
};

const updateInDB = async () => {
  const ProductModel = mongoose.model("pfizers", productSchema);
  let data = await ProductModel.updateMany(
    {},
    {
      $set: { company: "software" },
    }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("pfizers", productSchema);
  let data = await Product.deleteOne({ name: "Umar" });
  console.log(data);
};

const findInDB = async () => {
  const Product = mongoose.model("pfizers", productSchema);
  let data = await Product.find({ name: "Sumair" });
  console.log(data);
};

// app.listen(5000);
