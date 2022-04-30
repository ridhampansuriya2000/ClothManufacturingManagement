const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const rowschema = new mongoose.Schema({
    RowID:{
        type:String,
        required:true
    },
    MatrialName:{
        type:String,
        required:true
    },
    Quantity:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    DateofPurchase:{
        type:String,
        required:true
    },
    VendorID:{
        type:String,
        required:true
    },
    InvoiceNumber:{
        type:Number,
        required:true
    },
    CPU:{
        type:String,
        required:true
    },
    EnterBy:{
        type:ObjectId,
        ref:"User"

    }
})

mongoose.model("Row",rowschema)

/*
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const rowschema = new mongoose.Schema({
    R_id:{
        type:String,
        required:true
    },
    R_name:{
        type:String,
        required:true
    },
    R_quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    DateOfPurchase:{
        type:String,
        required:true
    },
    V_id:{
        type:String,
        required:true
    },
    InvoiceNumber:{
        type:String,
        required:true
    },
    Costperunit:{
        type:String,
        required:true
    }
})

mongoose.model("Row Matrial",rowschema)*/