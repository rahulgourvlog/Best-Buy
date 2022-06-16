import express from "express"
const cors =require("cors")
const app=express()
const {connection,Bestbuy}=require("./storage/db")


app.use(express.urlencoded({extended:true}))
app.use(express.json())
const PORT=process.env.PORT||8080


app.use(cors({
    origin:["http://localhost:3000"]
}))

app.get("/get",async(req,res)=>{

    const params=req.query;
    const buy=await Bestbuy.find(params)
    return res.send(buy)
})


app.get("/get/:id",async(req,res)=>{

        const params=req.params.id;
        const buy=await Bestbuy.findById(params,req.body)
        res.send(buy)
  
})

app.post("/post",async(req,res)=>{

    const buy=new Bestbuy({...req.body})
    const add=await buy.save();
    res.send(add)
})



app.listen(PORT,async()=>{

    // await connection

    console.log("server started on http://localhost:8080")
})





