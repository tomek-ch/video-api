import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App running on port ${port}`));
