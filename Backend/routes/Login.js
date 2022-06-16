//import {Router} from "express";
//import User from "../models/User"
var {Router}=require("express");
const User=require("../models/User")
var LoginRouter=Router();


//  LoginRouter.post("/signin",async(req,res)=>{
//     const userdata=new User(req.body);
// console.log(req.body)
//  await userdata.save()
   
// if(err){
//     res.status(500).send({message:"Error Occured"})
// }
// //return res.status(200).send(` HI ${req.body.firstName}`)
// return res.status(201).send(sucess)
// })

//  })

LoginRouter.post("/signin",async(req,res)=>{
try{
   const user= await User.create(req.body);
   res.status(201).json({data:user})
      }
      catch(err){
         res.status(500).send({message:err.message})
      }
     

    })






 LoginRouter.post("/login",async(req,res)=>{
    const{ email,password}=req.body;
    const validuser=await User.find({email,password});
        if(!validuser){
     res.status(401).send({message:"Invalid Crediancial"})
    
        }
        return res.send( validuser)
     })
    

 //export default LoginRouter
//

module.exports=LoginRouter;
