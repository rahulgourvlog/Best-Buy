"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Connection = require("./storage/db");
const cartRoute = require("./routes/cart.route");
const bestProductRoute = require("./routes/bestProduct.route");
const LoginRouter = require("./routes/Login");
const cors = require("cors");
let app = (0, express_1.default)();
app.use(cors({
    origin: ["http://localhost:3000","https://best-buy-tawny.vercel.app/"],
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
    res.send("App working");
});
app.use("/cart", cartRoute);
app.use("/auth", LoginRouter);
app.use("/best", bestProductRoute);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Connection;
        console.log("Connected Successfully");
    }
    catch (err) {
        console.log(err);
    }
    console.log("Sever is live at http://localhost:8080");
}));
