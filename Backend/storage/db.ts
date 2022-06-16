import mongoose from "mongoose";

const Connection = mongoose.connect("mongodb://localhost:27017/bestbuy");

module.exports = Connection;
