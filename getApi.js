const express = require("express");
const dbConnect = require("./dbConnection");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.patch("/updateAll", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  data.forEach(async element => {
    element.company = req.body.company
    // let result = await data.updateOne(
    //   {_id: new mongodb.ObjectId(req.params.id) },
    //   { $set: { name: req.body.name } }
    // );
    
  });
  dbConnect.data.save()

  
});

app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});

app.put("/:id", async (req, resp) => {
  console.log(req.params.id);
  let data = await dbConnect();
  let result = await data.updateOne(
    {_id: new mongodb.ObjectId(req.params.id) },
    { $set: { name: req.body.name } }
  );
    console.log(result);
  resp.send(result);
});

app.delete("/:id", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});

app.listen(4000);
