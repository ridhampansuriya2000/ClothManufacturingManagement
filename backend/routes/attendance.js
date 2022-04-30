const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const AT  = mongoose.model("AT")

router.post('/ATTENDANCE',(req,res)=>{
    const{E_id,
        Date,
        Status}=req.body
    if(!E_id || !Date || !Status ){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const at= new AT({
        E_id,
        Date,
        Status
    })
    at.save().then(result=>{
        res.json({at:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})





module.exports = router