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

module.exports = cartRoute;
