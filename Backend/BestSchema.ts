import mongoose from "mongoose";
const { Schema, model } = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/bestbuy");

// type SchemaType = {
//   title: string;
//   price: number;
//   thumbnail: string;
//   rating: string;
//   description: string;
//   discountPercentage: number;
//   brand: string;
//   stock: number;
//   category: string;
//   id: number;
// };

const bestSchema = Schema({
  title: String,
  price: Number,
  thumbnail: String,
  rating: String,
  description: String,
  discountPercentage: Number,
  brand: String,
  stock: Number,
  category: String,
  id: Number,
});

const Best = mongoose.model("bests", bestSchema);

module.exports = { Best, connection };
