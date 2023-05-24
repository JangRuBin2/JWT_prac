import express from "express";
import path from "path";
const root = path.join(import.meta.url, "../");
console.log(root)
const app = express();
app.use(express.static(root))
app.get('/', (req, res)=> {
  // res.send("Hello World");
  res.sendFile(path.resolve(root, "login.html"));
})
// app.get('/login.html', (req, res)=> {
//   res.send("Hello World");
// })
app.post('/login',(req, res)=> {
  res.send("하이?")
})

app.listen(8080,()=> {
  console.log("서버 정상적으로 연결");
})