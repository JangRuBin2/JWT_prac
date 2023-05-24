import express from "express";
import path from "path";
const root = path.join(import.meta.url, "../../");
console.log(root)
const app = express();
app.get('/', (req, res)=> {
  res.send("Hello World");
})
app.use(express.static(root))
app.listen(8080,()=> {
  console.log("서버 정상적으로 연결");
})