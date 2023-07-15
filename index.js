const express = require("express");
const app = express();
const db=require("./db");
const mongoose = require("mongoose")


const user_model = require('./schema');
const paymentRoutes = require("./routes/Payment");

const Login_Model=require("./LoginModel");
const cors = require('cors')


const dotenv = require("dotenv"); 
const { error } = require("console");
// const { default: orders } = require("razorpay/dist/types/orders");
dotenv.config() 

app.use(express.json())
app.use(cors());

//   routes
app.use("/api/payment/",paymentRoutes)

app.get("/",async(req,res)=>{
    try{
          const getting = await user_model.find({});
          res.send(getting)
    }
    catch(err)
    {
            res.send(err)
    }
})

app.post("/Login",async(req,res)=>{
    const{email,password} = req.body
    try{
        console.log(req.body);
        const checkexist = await Login_Model.findOne({email,password})
        console.log(checkexist)
        if(checkexist)
        {
            res.json("exist")
        }
        else
        {
             res.json("not exist")
        }

    }
    catch(e){
         res.json("not exist")
    }
})


app.post("/Signup",async(req,res)=>{
    
    try{
        const{name,email,password} = req.body
  console.log(req.body)
    
          const check = await Login_Model.findOne({email:email})
          console.log(check);
          if(check)
          {
            console.log("found");
            res.json("exist")
          }
          else
          {
            console.log("not found");
            res.json("not exist")
            const ne=new Login_Model({
                name,email,password
            })
            const re=ne.save();
          }
    }
    catch(e){
       res.status(400).json({msg:"not exist",e})
    }

})


const port = process.env.PORT||5000;
app.listen(port,()=>console.log("listening env")) 
// app.listen(3001,()=>{console.log("runs successfully")})

