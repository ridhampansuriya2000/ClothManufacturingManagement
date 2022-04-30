const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const employeeSchema = new mongoose.Schema({
    EmployeeID:{
        type:String,
        required:true
    },
    EmployeeName:{
        type:String,
        required:true
    },
    EmployeeGender:{
        type:String,
        required:true
    },
    EmployeeMobile:{
        type:String,
        required:true
    },
    EmployeeEmail:{
        type:String,
        required:true
    },
    EmployeeAddress:{
        type:String,
        required:true
    },
    E_count:{
        type:String,
        required:true
    },
    E_price:{
        type:String,
        required:true
    }
})

mongoose.model("Employee",employeeSchema)

/*
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const employeeSchema = new mongoose.Schema({
    E_id:{
        type:String,
        required:true
    },
    E_name:{
        type:String,
        required:true
    },
    E_gender:{
        type:String,
        required:true
    },
    E_mail:{
        type:String,
        required:true
    },
    E_contact:{
        type:String,
        required:true
    },
    E_address:{
        type:String,
        required:true
    },
    E_count:{
        type:Number,
       
    }
 

    
})

mongoose.model("Employee R",employeeSchema)*/