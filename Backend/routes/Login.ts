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
    console.log("req.body:", req.body.firstName === undefined);
    if (req.body.firstName === undefined || req.body.firstName === "") {
      return res.status(200).send({
        message: "Please enter a valid first name.",
        error: "firstName",
      });
    }

    if (req.body.lastName === undefined || req.body.lastName === "") {
      return res.status(200).send({
        message: "Please enter a valid last name.",
        error: "lastName",
      });
    }

    if (req.body.email === undefined || req.body.email === "") {
      return res.status(200).send({
        message: "Please enter a valid email address.",
        error: "email",
      });
    }

    if (
      req.body.password === undefined ||
      req.body.password.length === 0 ||
      req.body.password.length > 10
    ) {
      return res.status(200).send({
        message:
          "Please give a stronger Password of length smaller then 10 characters",
        error: "password",
      });
    }
    const passwordVal = validator.isStrongPassword(req.body.password);
    const emailVal = validator.isEmail(req.body.email);

    console.log("emailVal:", emailVal);
    console.log("passwordVal:", passwordVal);

    if (passwordVal && emailVal) {
      const user = new User(req.body);
      console.log("user:", user);

      await user.save((err: express.Errback, data: express.Response) => {
        if (err) throw console.log(err);
        return res.status(200).send(user);
      });
    } else if (!validator.isEmail(req.body.email)) {
      return res.status(200).send({
        message: "Please give a valid email address",
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

LoginRouter.get(
  "/:_id",
  async (req: express.Request, res: express.Response) => {
    const user = await User.findById(req.params);
    res.status(200).send(user);
  }
);

LoginRouter.post(
  "/login",
  async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    const validuserEmail = await User.find({ email });
    const validuserPass = await User.find({ password });

    // console.log("validuserEmail:", validuserEmail);
    // console.log("validuserPass:", validuserPass);

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
