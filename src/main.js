import { MongoClient } from "mongodb";

async function main(){
    const uri="mongodb://127.0.0.1:27017";

    //open the connection
    const client=new MongoClient(uri);

    const db=client.db("mydb");
    const library=db.collection("library");

   // const res=await library.insertOne({});
    const res=await library.insertOne({"name":"Ashitosh Vidhate"});

    //close the connection
    await client.close();

    console.log("Record Added");

}

main();