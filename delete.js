const dbConnect = require("./dbConnection");


const deleteData = async () =>{
    let data = await dbConnect();
    let result = await data.deleteOne({name: "Myrin"})
}


deleteData();