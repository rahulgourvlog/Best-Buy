const BestProduct = require("../models/bestProductSchema");
import express from "express";
import { Router } from "express";

const bestProductRoute = Router();

bestProductRoute.get(
  "/",
  async (req: express.Request, res: express.Response) => {
    const bestProduct = await BestProduct.find();
    res.status(200).send(bestProduct);
  }
);

bestProductRoute.get(
  "/:_id",
  async (req: express.Request, res: express.Response) => {
    const bestProduct = await BestProduct.find(req.params);
    res.status(200).send(bestProduct);
  }
);

bestProductRoute.post(
  "/",
  async (req: express.Request, res: express.Response) => {
    console.log("req.body:", req.body);
    for (var i = 0; i < req.body.length; i++) {
      const bestProduct = new BestProduct(req.body[i]);
      await bestProduct.save();
    }
    res.status(200).send("Saved");
  }
);

module.exports = bestProductRoute;
