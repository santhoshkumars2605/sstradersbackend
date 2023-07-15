const mongoose = require('mongoose')
//schema design
const Sstraders = new mongoose.Schema({
    id:Number,
    moduletitle:String,
    title:String,
    price:Number,
    qty:String,
    image:String,
})

module.exports = mongoose.model('sstraders',Sstraders); //1st is collectionname,2nd is shcemaa

