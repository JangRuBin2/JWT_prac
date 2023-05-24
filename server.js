import express from "express";
// console.log(express)
const app = express();
// console.log(app)
app.get('/', (req, res)=> {
  res.send("Hello World");
})
app.listen(8080,()=> {
  console.log("서버 정상적으로 연결");
})