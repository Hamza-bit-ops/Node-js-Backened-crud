const dbConnect = require("./dbConnection");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    { name: "pepsi", 
    qty: "1000", 
    price:"60",
    company:"abc"
  },
  { name: "7up", 
    qty: "2000", 
    price:"70",
    company:"abc"
  },
  { name: "Sting", 
    qty: "1000", 
    price:"80",
    company:"abc"
  },
  { name: "coke", 
    qty: "2000", 
    price:"90",
    company:"123"

  },
  { name: "siprite", 
    qty: "3000", 
    price:"100",
    company:"123"
  },
    
    
  ]);
};

insert();
