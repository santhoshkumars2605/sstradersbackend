const mongoose = require("mongoose")

const login_schema = mongoose.Schema(
    { 
        name:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:String
        }
    }
    )
module.exports = mongoose.model("Login_Model",login_schema)