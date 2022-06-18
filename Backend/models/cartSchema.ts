import mongoose from "mongoose";

// type SchemaType = {
//   title: string;
//   quantity: number;
//   save_amount: number;
//   price: number;
//   imageUrl: string;
//   sale_End: string;
//   userid: string;
//   protection: boolean;
// };

// const cartSchema = new mongoose.Schema<SchemaType>({
//   title: String,
//   quantity: Number,
//   save_amount: Number,
//   price: Number,
//   imageUrl: String,
//   sale_End: String,
//   protection: Boolean,
//   userid: String,
// });

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
  quantity: number;
  userid: string,
};

const cartSchema = new mongoose.Schema<SchemaType>({
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

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
