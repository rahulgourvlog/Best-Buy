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
const BestProduct = require("../models/bestProductSchema");
const express_1 = require("express");
const bestProductRoute = (0, express_1.Router)();
bestProductRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bestProduct = yield BestProduct.find();
    res.status(200).send(bestProduct);
}));
bestProductRoute.get("/:_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bestProduct = yield BestProduct.find(req.params);
    res.status(200).send(bestProduct);
}));
bestProductRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req.body:", req.body);
    for (var i = 0; i < req.body.length; i++) {
        const bestProduct = new BestProduct(req.body[i]);
        yield bestProduct.save();
    }
    res.status(200).send("Saved");
}));
module.exports = bestProductRoute;
