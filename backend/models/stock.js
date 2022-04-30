const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const stockschema = new mongoose.Schema({
    ProductID:{
        type:String,
        required:true
    },
    ProductType:{
        type:String,
        required:true
    },
    Length:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    EID:{
        type:String,
        required:true
    },
    EnterBy:{
        type:ObjectId,
        ref:"User"

    }
})

mongoose.model("Stock",stockschema)


/*
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const stockschema = new mongoose.Schema({
    P_id:{
        type:String,
        required:true
    },
    P_type:{
        type:String,
        required:true
    },
    length:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    E_id:{
        type:String,
        required:true
    }
})

mongoose.model("Stock Entry",stockschema)*/