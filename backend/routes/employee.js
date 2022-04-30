

const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Employee  = mongoose.model("Employee");
/*
router.get('/EmployeeRegistration',(req,res,next)=>{
    Employee.find()
    .then(result=>{
        res.status(200).json({
        EmployeeData:result
    });   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})
*/
router.get('/EmployeeRegistration', async (req, res) => {
    try {
      const students = await Employee.find({});
      res.send({ students })
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });
  router.get('/EmployeeRegistration/:id', async (req, res) => {
    try {
      const student = await Employee.findById(req.params.id);
      res.send({ student });
    } catch (err) {
      res.status(404).send({ message: 'Student not found!' });
    }
  });
  router.put('/edit/:id', async (req, res) => {
    try {
      const updatedStudent = await Employee.findByIdAndUpdate(req.params.id, req.body);
       res.send({ message: 'The student was updated' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
    
  });

  router.put('/all', async(req, res)=>{
   res.send("Wel come to Salary portal ");
    try {
      const updatedStudent = await Employee.updateMany({E_count:"0"});
       res.send({ message: 'The salary was paid' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
});

router.post('/EmployeeRegistration',(req,res)=>{
    const{EmployeeID,
        EmployeeName,
        EmployeeGender,
        EmployeeMobile,
        EmployeeEmail,
        EmployeeAddress,
        E_count,
        E_price
       }=req.body
    if(!EmployeeID || !EmployeeName || !EmployeeGender || !EmployeeMobile|| !EmployeeEmail|| !EmployeeAddress|| !E_count ||!E_price ){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const employee= new Employee({
        EmployeeID,
        EmployeeName,
        EmployeeGender,
        EmployeeMobile,
        EmployeeEmail,
        EmployeeAddress,
        E_count,
        E_price,
        EnterBy:req.user
        
    })
    employee.save().then(result=>{
      /*  transporter.sendMail({
            to:employee.EmployeeEmail,
            from:"no-reply@ItExponent.com",
            subject:"Signup successfully",
            html:"<h1>You are now member of ItExponent</h1>"
        })*/
        res.status(200).send({employee:result});   
    })
    .catch(err=>{
        res.status(400);
        console.log(err)
    })

})




module.exports = router


/*const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Employee  = mongoose.model("Employee R")

router.post('/EmployeeRegistration',(req,res)=>{
    const{E_id,
        E_name,
        E_gender,
        E_contact,
        E_mail,
        E_count,
        E_address}=req.body
    if(!E_id || !E_name || ! E_gender || !E_contact || ! E_mail|| !E_address || E_count){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const employee= new Employee({
        E_id,
        E_name,
        E_gender,
        E_contact,
        E_mail,
        E_address,
        E_count
    })
    employee.save().then(result=>{
        res.json({employee:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


router.get('/EmployeeRegistration',(req,res,next)=>{
    Employee.find()
    .then(result=>{
        res.status(200).json({
        EmployeeData:result
    });   
 })
})
 router.get('/EmployeeRegistration1',(req,res,next)=>{
    Employee.find()
    .then(Employee=>{res.json(Employee);   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})*/
/*
router.put('/EmployeeRegistration/:id', (req, res) => {
 

    var updatedRecord = {
        
        E_count:req.body.E_count
       
    }

    Employee.findOneAndUpdate(req.params.id, { $set: updatedRecord },{new:true}, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while updating a record : ' + JSON.stringify(err, undefined, 2))
    })
})
*/
/*
router.patch('/Attendance/:id',async (req,res,next)=>{
    const{E_id,
        E_name,
        E_gender,
        E_contact,
        E_mail,
        E_count,
        E_address}=req.body
    
    //req.user.password = undefined
        const id=req.params.id;
        const update=req.body;
        const option={new:true}
        const result= await Employee.findByIdAndUpdate(id,update,option)
        res.send(result)

})*/
/*
router.post('/Attendance/:id',(req, res, next)=> {
    Employee.findById(req.params.id, function(err, item) {
        if(!item) {
            return next(new Error('could not load Document'));
        }
        else { // do your update here
            item.item = req.body.item;
            item.save().then(item => {
                res.json('Update complete');
            })
            .catch((err) => {
                res.status(400).send("unable to update the database");
            });
        }
    });
});
*/
/*
module.exports = router*/