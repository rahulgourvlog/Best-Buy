const Cart = require("../models/cartSchema");
import express from "express";
import { Router } from "express";

const cartRoute = Router();

cartRoute.get("/", async (req: express.Request, res: express.Response) => {
  const cart = await Cart.find();
  res.status(200).send(cart);
});

cartRoute.post("/new", async (req: express.Request, res: express.Response) => {
  console.log("req.body:", req.body);

  const cart = new Cart(req.body);

  await cart.save((err: express.Errback, data: express.Response) => {
    if (err) console.log(err);
    return res
      .status(200)
      .send({ message: "Product Added successfully", data });
  });
});

cartRoute.delete(
  "/:_id",
  async (req: express.Request, res: express.Response) => {
    try {
      const cart = await Cart.deleteOne(req.params);
      res.status(200).send({ message: "item deleted successfully" });
    } catch (err) {
      if (err) res.status(404).send({ message: "item not found" });
    }
  }
);

cartRoute.patch("/:_id", async (req: express.Request, res: express.Response) => {
  try {
    const cart = await Cart.updateOne(req.params, { $set: req.body });
    res.status(200).send({ message: "item updated successfully" });
  } catch (err) {
    if (err) res.status(404).send({ message: "item not found" });
  }
});

// {

//   "_id": "62ab5152a7609e19309cb07c",
//    "title": "Deckster 3-Piece Patio Conversation Set - Grey Brown Wicker/Beige Cushions",
//    "quantity": 1,
//    "price": 869.99,
//    "imageUrl": "https://multimedia.bbycastatic.ca/multimedia/products/300x300/139/13974/13974513.jpg",
//    "sale_End": "June 16, 2022",
//    "protection": false,
//    "save_amount": 130

// }

module.exports = cartRoute;
