const dbConnect = require('./dbConnection')

const main = async () =>{
    let connection = await dbConnect();
    data = await connection.find().toArray();
    console.log(data);
}

main(); 