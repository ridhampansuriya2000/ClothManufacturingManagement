const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const atschema = new mongoose.Schema({
    E_id:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    }
   
})
mongoose.model("AT",atschema)