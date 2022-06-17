import mongoose from "mongoose";

type SchemaType = {
  save_amount: number;
  sale_End: string;
  quantity: number;
  userid: string;
  title: string;
  description: string;
  discountPercentage: number;
  price: number;
  thumbnail: string;
  stock: number;
  images: [string];
  protection: boolean;
  rating: number;
  brand: string;
  category: string;
};

const cartSchema = new mongoose.Schema<SchemaType>({
  save_amount: Number,
  sale_End: String,
  quantity: Number,
  userid: String,
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

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
