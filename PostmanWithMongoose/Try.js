const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/Pharma');


require('./product');

const app = express();
app.use(express.json());

app.post('/create', async (req, resp) => {
  console.log(req.body);
  let Product = mongoose.model("products");
  let data = await new Product({
    name: req.body.name,
    company: req.body.company,
  });
  data.save();
  resp.send('Done');
});

app.get('/list', async (req, res) => {
    let Product = mongoose.model("products");
  let data = await Product.find();
  res.send(data);
});

app.delete('/delete/:_id', async (req, res) => {
  let data = await Product.deleteOne(req.params);
  res.send(data);
});

app.put('/update/:_id', async (req, resp) => {
  let data = await Product.updateOne(
    req.params,
    {
      $set: req.body,
    }
  );
  resp.send('Done');
});

app.listen(5000);
