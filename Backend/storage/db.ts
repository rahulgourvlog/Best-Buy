import mongoose from "mongoose";
require("dotenv").config();

const Connection = mongoose.connect(process.env.MONGOLINK);

module.exports = Connection;
