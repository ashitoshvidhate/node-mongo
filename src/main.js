import { MongoClient } from "mongodb";

//passing parameters to insert function
async function insertRecord(jsonDocument){
    const uri="mongodb://127.0.0.1:27017";

    //open the connection
    const client=new MongoClient(uri);

    const db=client.db("mydb");
    const library=db.collection("library");

   // const res=await library.insertOne({});
   //let jsonDocument={message:"Hello world!",to:"Ashitosh" ,from:"Atish"};

   await library.insertOne(jsonDocument);

    //close the connection
    await client.close();

    console.log("Record Added");

}

async function main(){
    let jsonDocument={message:"Hello world!",to:"Ashitosh" ,from:"Atish"};
    await insertRecord(jsonDocument);
}

main();