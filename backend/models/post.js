const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const post = new mongoose.Schema({
    E_post:{
        type:String,
        required:true
       },
       price:{
        type:String,
        required:true
       }
   
})
mongoose.model("PT",post)