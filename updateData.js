const dbConnect = require("./dbConnection");

const updateData = async () => {
  let data = await dbConnect();
  const filter = { name: "Hamza" };

  const update = {
    $set: {
      name: "Malik Hamza Saharan",
      company: "LCS",
      
      


      
    },
  };

  let result = await data.updateMany(filter, update);
  console.log(data);
};

updateData();
