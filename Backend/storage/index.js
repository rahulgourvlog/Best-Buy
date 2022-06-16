const express=require("express");
const cors=require("cors");
const app=express();


var LoginRouter=require("./routes/Login");
//var SignRouter=require("./routes/Signin");
var connection=require("./storage/db");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());

app.use("/",LoginRouter);
//app.use(SignRouter);


app.listen(8080,async()=>{
await connection;

console.log("Connnected to the db");
console.log("listening on port 8080")  
})