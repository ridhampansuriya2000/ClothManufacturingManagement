const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Stock  = mongoose.model("Stock")

router.delete('/StockEntry/product/:id', async (req, res) => {
    console.log("delete api called------>")
    try{
        console.log(req.params.id);
        const product = await Stock.findByIdAndRemove({_id : req.params.id});
        console.log(product)
        if(!req.params.id){
           console.log("data not deleted")
            res.status(500);
            
        }else{
            console.log("data deleted");
            res.status(200).send(product);
            
        }
       }catch(error){
           //  console.log(error)
           res.status(500).send("---->",error);
       }
    // try{
    //     console.log("id of delete element ----->",req.params.id);
    //     const product = await Stock.findByIdAndRemove({_id: req.params.id}); 
    //     res.status(200).send(product);   
    // }catch(err)
    // {
    //     res.status(400).send(err);
    //     console.log("error of delete request-->",err)
    // }
 
});

router.get('/StockEntry', (req,res)=>{
    Stock.find()
    .then(stock=>{res.json(stock);})
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})


router.get('/StockEntry1',(req,res,next)=>{
    Stock.find()
    .then(result=>{
        res.status(200).json({
        StockData:result
    });   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})


router.post('/StockEntry',( req, res)=>{
    const{ProductID,
        ProductType,
        Length,
        Date,
        EID}=req.body
    if(!ProductID || !ProductType || !Length || !Date || !EID){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const stock= new Stock({
        ProductID,
        ProductType,
        Length,
        Date,
        EID,
        EnterBy:req.user
    })
    stock.save().then(result=>{
        res.json({stock:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})




module.exports = router


/*const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Stock  = mongoose.model("Stock Entry")

router.post('/StockEntry',(req,res)=>{
    const{P_id,
        P_type,
        length,
        date,
        E_id}=req.body
    if(!P_id || !P_type || !length || !date || !E_id){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const stock= new Stock({
        P_id,
        P_type,
        length,
        date,
        E_id,
    
    })
    stock.save().then(result=>{
        res.json({stock:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


module.exports = router*/