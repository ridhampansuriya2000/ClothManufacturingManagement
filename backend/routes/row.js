const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Row  = mongoose.model("Row")

router.delete('/StockEntry/product/:id', async (req, res) => {
    console.log("delete api called------>")
    try{
        console.log(req.params.id);
        const product = await Row.findByIdAndRemove({_id : req.params.id});
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
});


router.get("/search/:RowID",function(req,res)
{
    var regex=new RegExp(req.pararams.RowID,'i');
    Row.find({RowID:regex}).then((result)=>{
        res.status(200).json(result)
    })
})



router.get('/RowEntry',(req,res,next)=>{
    Row.find()
    .then(result=>{
        res.status(200).json({
        RowData:result
    });   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})




router.route('/StockEntry/:id').delete((req, res, next) => {
    Row.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

router.post('/RowEntry',(req,res)=>{
        const{  RowID,
            MatrialName,
            Quantity,
            Price,
            DateofPurchase,
            VendorID,
            InvoiceNumber,
            CPU}=req.body
    if(!RowID || !MatrialName || !Quantity || !Price || !DateofPurchase || !VendorID|| !InvoiceNumber || !CPU){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const row= new Row({
        RowID,
    MatrialName,
    Quantity,
    Price,
    DateofPurchase,
    VendorID,
    InvoiceNumber,
    CPU,
        EnterBy:req.user
    })
    row.save().then(result=>{
        res.json({row:result})     
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
const Row  = mongoose.model("Row Matrial")

router.post('/RowEntry',(req,res)=>{
    const{R_id,
		R_name,
		R_quantity,
		price,
		DateOfPurchase,
		V_id,
		InvoiceNumber,
		Costperunit}=req.body
    if(!R_id || !R_name || !R_quantity || !price || !DateOfPurchase || !V_id|| !InvoiceNumber || !Costperunit){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const row= new Row({
        R_id,
		R_name,
		R_quantity,
		price,
		DateOfPurchase,
		V_id,
		InvoiceNumber,
		Costperunit
    })
    row.save().then(result=>{
        res.json({row:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


module.exports = router*/