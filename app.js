const express = require('express')
const bodyParser = require('body-parser')
const {getAllTodoList,createTodo,deteleTodoById,updateTodoByID} = require('./controller/sstraders');
const {add,cart,change}=require("./controller/cartpage")
const Login_Model=require("./model/Login_Model");

const{connectDb} = require('./config/db')


// const db=require("./db");
// const mongoose = require("mongoose")

connectDb();
const cors = require('cors')
const app = new express();


app.use(cors())
app.use(bodyParser.json());

app.get('/api/v1/sstraders',getAllTodoList);
app.post('/api/v1/sstraders',createTodo);
app.delete('/api/v1/sstraders/:_id',deteleTodoById)
app.put('/api/v1/sstraders/:_id',updateTodoByID)
app.put("/addtocart",add);
app.get("/cart/:email",cart);
app.patch("/change",change)



const paymentRoutes = require("./routes/Payment");
const dotenv = require("dotenv"); 
dotenv.config() 

app.use("/api/payment/",paymentRoutes)


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