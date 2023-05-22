const express = require("express");
const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/Pharma");

const productSchema = new mongoose.Schema({
  name: String,
  company: String,
});

const app = express();
app.use(express.json());


app.post("/create", async (req, resp) => {
  console.log(req.body);
  let ProductModel =  mongoose.model("products",productSchema)
  let data = new ProductModel({
    name: req.body.name, 
    company: req.body.company 
   });
   data.save()
   console.log("========>",data);
  resp.send("Done");
});



app.listen(5000);
