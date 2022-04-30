/*const express = require('express')
    const router = express.Router()

    const mongoose = require('mongoose') 
    const User = mongoose.model("User")
    var bcrypt = require('bcryptjs')
   const jwt = require('jsonwebtoken')
   const {JWT_SECRET} = require('../keys')
    const requireLogin = require('../middleware/requireLogin.js')
    
    router.get('/signup',(req,res,next)=>{
        User.find()
        .then(result=>{
            res.status(200).json({
            User:result
        });   
     })
    
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
    })
    router.get('/auth',requireLogin,(req,res)=>{
        res.send("hello Welcome to dash bord")
    })

    router.get('/login',(req,res,next)=>{
        User.find()
        .then(result=>{
            res.status(200).json({
            User:result
        });   
     })
    
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
    })

    router.post('/signup',(req,res)=>{
        const {Fullname,Email,Contact_number,Password} = req.body
        if(!Fullname || !Email || !Contact_number || !Password)
            {
                return res.json({error:"please fill up all data"})
            }
            User.findOne({Email:Email})
            .then((savedUser)=>{
                if(savedUser){
                    return res.json({error:" Email is alwardy used"})
                }
                bcrypt.hash(Password,12)
                .then(hashedpassword=>{
                    const user = new User({
                        Fullname,
                        Email,
                        Contact_number,
                        Password:hashedpassword
                    })
                    user.save()
                    .then(user=>{
                        res.json({message:"Saved succcfully"})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })
                
         })
         .catch(err=>{
         console.log(err)
         })
    })

    router.post('/login',(req,res)=>{
        const {Email,Password} = req.body
        if(!Email || !Password){
            return res.json({error:"please add email or password"})
        }
        User.findOne({Email:Email})
        .then(savedUser=>{
            if(!savedUser){
                return res.json({error:" user name or Password is invalid"})
            }
           bcrypt.compare(Password,savedUser.Password)
            .then(doMatch=>{
                if(doMatch){
                   // res.json({message:"Loged in succefully"})
                    const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                    const {_id,Fullname,Email}=savedUser
                    res.json({token,user:{_id,Fullname,Email}})
                
                }
                else{
                    return res.json({error:"Invaild user name or Password"})
                }
            })
            .catch(err=>{
                console.log(err)
            })
            
        })
    })
    module.exports = router*/
/*
    const express = require('express')
const router = express.Router()

const mongoose = require('mongoose') 
const User = mongoose.model("User")
var bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')
   
     router.get('/signup',(req,res,next)=>{
    User.find()
    .then(result=>{
        res.status(200).json({
        Userdata:result
    });   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})
    router.get('/protected',requireLogin,(req,res)=>{
        res.send("hello Welcome to dash bord")
    })


    router.post('/signup',(req,res)=>{
        const {Fullname,Email,Contact_number,Password} = req.body
        if(!Fullname || !Email || !Contact_number || !Password)
            {
                return res.json({error:"please fill up all data"})
            }
            User.findOne({Email:Email})
            .then((savedUser)=>{
                if(savedUser){
                    return res.json({error:" Email is alwardy used"})
                }
                bcrypt.hash(Password,12)
                .then(hashedpassword=>{
                    const user = new User({
                        Fullname,
                        Email,
                        Contact_number,
                        Password:hashedpassword
                    })
                    user.save()
                    .then(user=>{
                        res.json({message:"Saved succcfully"})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })
                
         })
         .catch(err=>{
         console.log(err)
         })
    })

    router.post('/login',(req,res)=>{
        const {Email,Password} = req.body
        if(!Email || !Password){
            return res.json({error:"please add email or password"})
        }
        User.findOne({Email:Email})
        .then(savedUser=>{
            if(!savedUser){
                return res.json({error:" user name or Password is invalid"})
            }
           bcrypt.compare(Password,savedUser.Password)
            .then(doMatch=>{
                if(doMatch){
                    //res.json({message:"Loged in succefully"})
                    const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                }
                else{
                    return res.json({error:"Invaild user name or Password"})
                }
            })
            .catch(err=>{
                console.log(err)
            })
            
        })
    })*/
/*
    const express=require('express')
    const router = express.Router()

    const mongoose = require('mongoose') 
    const User = mongoose.model("User")
    const jwt=require('jsonwebtoken')
    const bcryptjs=require('bcryptjs')
    const {check,validationResult}=require('express-validator')
    const config=require('config')

    router.post(
        '/signup',[
            check('email','E-mail is reqired').isEmail(),
            check('password','password is requied').not().isEmpty()

        ],async (req,res)=>{
            try{
                  let {email,password}=req.body;
                  let user=await UserSchema.findOne({email:email})
                  const errors=validationResult(req)
                  if(!error.isEmpty()){
                      return res.status(401).json({errors:errors.array()})
                  }

                  if(user){
                      return res.status(401).json({msg:"there is already user with this e-mail"})
                  }

                  const salt= await bcryptjs.genSalt(10)
                  password=await bcriptjs.hash(password,salt)

                  user= new UserSchema({
                      email,
                      password
                  })

                  await user.save()
                  const payload={
                      user:{
                          id:user.id
                      }
                      
                  }
                  jwt.sign(
                      payload,
                      config.get('jwtSecret'),
                      (err,token=>{
                          if(err)throw err;
                          res.json({token})
                      })
                  )
                  res.send('jay')
            }catch(error){
                console.log(error.message)
                return res.status(500).json({msg:"Serrver Error.."})
            }

            
        }
    )

    router.post(
        '/login',[
            check('email','E-mail is reqired').isEmail(),
            check('password','password is requied').not().isEmpty()

        ],async (req,res)=>{
            try{
                  let {email,password}=req.body;
                  let user=await UserSchema.findOne({email:email})
                  const errors=validationResult(req)

                  if(!error.isEmpty()){
                    return res.status(401).json({errors:errors.array()})
                }

                  if(!user){
                      return res.status(401).json({msg:"no user"})
                  }

                    let isPasswordMatch=await bcryptjs.compare(password,user.password)

                    if(!isPasswordMatch){
                        const payload={
                            user:{
                                id:user.id
                            }
                            
                        }
                        jwt.sign(
                            payload,
                            config.get('jwtSecret'),
                            (err,token=>{
                                if(err)throw err;
                                res.json({token})
                            })
                        )
                    }else return res.status(401).json({msg:"Password are not match"})
                }


                  catch(error){
                    console.log(error.message)
                    return res.status(500).json({msg:"Serrver Error.."})
                }
            }
    )
    module.exports = router*/