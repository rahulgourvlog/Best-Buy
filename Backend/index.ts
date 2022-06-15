import express from "express";
const Connection = require("./storage/db");
const cartRoute = require("./routes/cart.route");
const cors = require("cors");

let app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const port = process.env.PORT || 8080;

app.use("/cart", cartRoute);

app.listen(port, async () => {
  
  try {
    await Connection;
    console.log("Connected Successfully");
  } catch (err) {
    console.log(err);
  }

  console.log("Sever is live at http://localhost:8080");
});
