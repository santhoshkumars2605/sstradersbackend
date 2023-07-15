const mongoose = require('mongoose')
//schema design
const Addtocart = new mongoose.Schema({
    email:String,
    items:
    {type:[
        {
            productid:{type:String},
            need:{type:Number},
            image:{type:String},
            title:{type:String},
            price:{type:Number},
            qty:{type:String}
        }
    ]}
})

module.exports = mongoose.model('addtocart',Addtocart); //1st is collectionname,2nd is shcemaa

