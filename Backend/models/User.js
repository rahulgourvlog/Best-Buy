"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { model, Schema } = require("mongoose");
const UserSchema = new Schema({
    email: {
        type: String,
    },
    firstName: { type: String, maxlength: 20 },
    lastName: { type: String, maxlength: 20 },
    password: { type: String, minlength: 4 },
});
const User = model("user", UserSchema);
//export default User;
module.exports = User;
