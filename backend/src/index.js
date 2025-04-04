import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("wohoooo!");
});

app.listen(3000, () => {
  console.log("Api is alive");
});
