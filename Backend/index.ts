import express from "express";
const cors = require("cors");
const { Best, connection } = require("./BestSchema");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.get("/", (req, res) => {
  res.send("working with type");
});

app.get("/Best", async (req, res) => {
  const product = await Best.find();
  return res.send(product);
});

const PORT = process.env.PORT || 8070;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch {
    console.log("failed to connect to db");
  }
});
