
//remotely executable
//NetWork call
//Network address
//Remote Address
//http://localhost:4000/
import  express  from "express";
const app = express()

function main(req,res){
  //  return "hello";
  res.send("some message....!!")
}

// http://localhost:4000/main
app.get("/main",main);

// http://localhost:4000
app.listen(4000);
