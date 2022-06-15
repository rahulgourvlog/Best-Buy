import mongoose from "mongoose";

type SchemaType = {
  title: string;
  quantity: number;
  save_amount: number;
  price: number;
  imageUrl: string;
  sale_End: string;
};

const cartSchema = new mongoose.Schema<SchemaType>({
  title: String,
  quantity: Number,
  save_amount: Number,
  price: Number,
  imageUrl: String,
  sale_End: String,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
