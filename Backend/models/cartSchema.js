"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cartSchema = new mongoose_1.default.Schema({
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
    quantity: Number,
    userid: String,
});
const Cart = mongoose_1.default.model("Cart", cartSchema);
module.exports = Cart;
