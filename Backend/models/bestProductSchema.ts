import mongoose from "mongoose";

export type SchemaType = {
  title: string;
  description: string;
  discountPercentage: number;
  price: number;
  thumbnail: string;
  stock: number;
  images: string[];
  protection: boolean;
  rating: number;
  brand: string;
  category: string;
};

const bestProductSchema = new mongoose.Schema<SchemaType>({
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

const BestProduct = mongoose.model("best", bestProductSchema);

module.exports = BestProduct;
