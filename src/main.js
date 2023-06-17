import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // allowing everyone.


async function main(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const messageColl = db.collection("library");

  let message = req.query.message;
  let inputDocument = { message: message };
  await messageColl.insertOne(inputDocument);

  await client.close();

  res.send("record added");
}

async function findAllMessage(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const messageColl = db.collection("library");

  let list = await messageColl.find().toArray();

  await client.close();
  res.send(list);
}



// NEW TODO API
async function addTodo(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  const messageColl = db.collection("todo");

  let inputDoc = {
    task: req.query.task,
    description: req.query.description,
  };
  await messageColl.insertOne(inputDoc);

  await client.close();

  res.json({ opr: "success" });
}

async function findAllTodo(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  const messageColl = db.collection("todo");

  let list = await messageColl.find().toArray();

  await client.close();
  res.json(list);
}


app.get("/main", main);
app.get("/find", findAllMessage);
// http://localhost:4000/addTodo?task=${Ashitosh}&description=${Vidhate}
app.get("/addtodo", addTodo);
app.get("/find-all-todo", findAllTodo);

// http://localhost:4000
app.listen(4000);