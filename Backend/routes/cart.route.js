"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart = require("../models/cartSchema");
const express_1 = require("express");
const cartRoute = (0, express_1.Router)();
cartRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield Cart.find();
    res.status(200).send(cart);
}));
cartRoute.get("/:userid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield Cart.find(req.params);
    res.status(200).send(cart);
}));
cartRoute.post("/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req.body:", req.body);
    const cart = new Cart(req.body);
    yield cart.save((err, data) => {
        if (err)
            console.log(err);
        return res
            .status(200)
            .send({ message: "Product Added successfully", data });
    });
}));
cartRoute.delete("/:_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield Cart.deleteOne(req.params);
        res.status(200).send({ message: "item deleted successfully" });
    }
    catch (err) {
        if (err)
            res.status(404).send({ message: "item not found" });
    }
}));
cartRoute.patch("/:_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield Cart.updateOne(req.params, { $set: req.body });
        res.status(200).send({ message: "item updated successfully" });
    }
    catch (err) {
        if (err)
            res.status(404).send({ message: "item not found" });
    }
}));
module.exports = cartRoute;
