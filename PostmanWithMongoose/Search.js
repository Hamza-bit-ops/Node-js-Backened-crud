const express = require("express");
const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/Pharma");


const Product = new mongoose.Schema({
    name: String,
    price: Number,
    company: String,
    category: String,
  });



const app = express();
app.use(express.json());


app.get('/search/:key', async (req, resp) => {
    let data =  await Product.find()
    resp.send(data);
   });



app.listen(5000);
