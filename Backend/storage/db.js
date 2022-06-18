"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Connection = mongoose_1.default.connect("mongodb+srv://Devesh26:2T-K-uVH56*tmf9@cluster0.tbzsaga.mongodb.net/?retryWrites=true&w=majority");
module.exports = Connection;
