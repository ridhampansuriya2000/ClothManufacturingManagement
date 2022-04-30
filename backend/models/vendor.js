const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const vendorSchema = new mongoose.Schema({
    VendorID:{
        type:String,
        required:true
    },
    VendorName:{
        type:String,
        required:true
    },
    VendorGender:{
        type:String,
        required:true
    },
    VendorEmail:{
        type:String,
        required:true
    },
    VendorMobile:{
        type:String,
        required:true
    },
    VendorAddress:{
        type:String,
        required:true
    },
    EnterBy:{
        type:ObjectId,
        ref:"User"

    }
})

mongoose.model("Vendor",vendorSchema)

/*
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const vendorSchema = new mongoose.Schema({
    V_id:{
        type:String,
        required:true
    },
    V_name:{
        type:String,
        required:true
    },
    V_gender:{
        type:String,
        required:true
    },
    V_mail:{
        type:String,
        required:true
    },
    V_contact:{
        type:String,
        required:true
    },
    V_address:{
        type:String,
        required:true
    }
})

mongoose.model("Vendor R",vendorSchema)*/