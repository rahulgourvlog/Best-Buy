//import mongoose from "mongoose";
//import validator from "validator";
//import {model,Schema} from "mongoose"
import mongoose from "mongoose";
const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: { type: String, minlength: 2, maxlength: 20 },
  lastName: { type: String, required: true, minlength: 2, maxlength: 20 },
  password: { type: String, required: true, minlength: 4, maxlength: 10 },
});

const User = model("user", UserSchema);
//export default User;
module.exports = User;
