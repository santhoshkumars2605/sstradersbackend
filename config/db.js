const mongoose = require('mongoose');

exports.connectDb = async ()=>{
    try {
        const conn = await mongoose.connect('mongodb://0.0.0.0:27017/sstraderadmin')
        console.log('db connected')
    }catch(err){
        console.log('error in db connection')
        console.log('')
    }
}