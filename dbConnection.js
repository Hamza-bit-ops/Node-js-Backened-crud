const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017/';
const databaseName = 'Pharma'
const client =new MongoClient(url);


async function dbConnect () {
    let result = await client.connect();
    db= result.db(databaseName)
    collection = db.collection('pfizers')
    // let data = await collection.find().toArray();
    // console.log(data)
    return db.collection('pfizers');
}


// dbConnect();

module.exports=dbConnect;