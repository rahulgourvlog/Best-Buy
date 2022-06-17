import mongoose from "mongoose";

const Connection = mongoose.connect(
  "mongodb+srv://Devesh26:2T-K-uVH56*tmf9@cluster0.tbzsaga.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = Connection;
