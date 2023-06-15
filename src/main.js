import { MongoClient } from "mongodb";

//passing parameters to insert function


async function main(){
    let jsonDocument={message:"Hello world!",to:"Ashitosh" ,from:"Atish"};
    await insertRecord(jsonDocument);
}

main();