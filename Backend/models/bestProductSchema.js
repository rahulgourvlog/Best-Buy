"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bestProductSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    discountPercentage: Number,
    price: Number,
    thumbnail: String,
    stock: Number,
    images: [String],
    protection: Boolean,
    rating: Number,
    brand: String,
    category: String,
});
const BestProduct = mongoose_1.default.model("best", bestProductSchema);
module.exports = BestProduct;
