import express from "express";
//import {Router} from "express";
//import User from "../models/User"
const validator = require("validator");
var { Router } = require("express");
const User = require("../models/User");
var LoginRouter = Router();

LoginRouter.post(
  "/signin",
  async (req: express.Request, res: express.Response) => {
    const user = new User(req.body);

    if (
      validator.isEmail(req.body.email) &&
      validator.isStrongPassword(req.body.password)
    ) {
      await user.save((err: express.Errback, data: express.Response) => {
        if (err) throw console.log(err);
        return res.status(200).send(data);
      });
    } else if (!validator.isEmail(req.body.email)) {
      return res
        .status(200)
        .send({ message: "Please give a valid email", error: true });
    } else {
      return res
        .status(200)
        .send({ message: "Please give a stronger Passward", error: true });
    }
  }
);

LoginRouter.post(
  "/login",
  async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    const validuser = await User.find({ email, password });
    console.log("validuser:", validuser);
    if (!validuser) {
      res.status(401).send({ message: "Invalid Crediancial" });
    }
    return res.send(validuser);
  }
);

module.exports = LoginRouter;
