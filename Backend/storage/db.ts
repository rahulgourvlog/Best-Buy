const mongoose=require("mongoose");
const {Schema,model}=require("mongoose");
const { any } = require("webidl-conversions");

const connection=mongoose.connect("mongodb://localhost:27017/bestbuy")

const BestSchema=new Schema({
name: {type:String},
rating:Number,
price: Number,
img:String,
availability: {type:String,enum:[ "Available","Out of Stock"]}
})


const Bestbuy=model("bestbuy",BestSchema)

module.exports={Bestbuy,connection}



//npm i @type/express