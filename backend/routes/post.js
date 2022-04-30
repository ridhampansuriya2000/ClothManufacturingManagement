const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const PT = mongoose.model("PT")

router.get('/post',(req,res,next)=>{
    PT.find()
    .then(result=>{
        res.status(200).json({
        PTData:result
    });   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})
router.post('/post',(req,res)=>{
    const{E_post,
    price}=req.body
    if(!E_post || !price){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const post= new PT({
        E_post,
        price,
        EnterBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


module.exports = router