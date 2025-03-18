
import express from "express";

const app = express();

app.post("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("server is started");
});
