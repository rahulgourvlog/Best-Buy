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
        return res.status(200).send(user);
      });
    } else if (!validator.isEmail(req.body.email)) {
      return res.status(200).send({
        message: "Please give a valid email",
        error: "email",
      });
    } else {
      return res.status(200).send({
        message: "Please give a stronger Password",
        error: "password",
      });
    }
  }
);

LoginRouter.post(
  "/login",
  async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    const validuserEmail = await User.find({ email });
    const validuserPass = await User.find({ password });

    console.log("validuserEmail:", validuserEmail);
    console.log("validuserPass:", validuserPass);

    if (validuserEmail.length === 0 && validuserPass.length === 0) {
      res.status(200).send({ message: "Invalid Crediancial", error: "error" });
    } else if (validuserEmail.length > 0 && validuserPass.length === 0) {
      res.status(200).send({
        message:
          "Please enter your password. It must be 6 to 30 characters and contain at least one number and one letter.",
        error: "password",
      });
    } else if (validuserEmail.length === 0 && validuserPass.length > 0) {
      res.status(200).send({
        message: "Please enter a valid email address.",
        error: "email",
      });
    } else {
      return res.send(validuserEmail);
    }
  }
);

module.exports = LoginRouter;
