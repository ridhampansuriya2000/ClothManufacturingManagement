// const mongoose   = require('mongoose');
// const router = express.Router();
// mongoose.connect('mongodb://localhost:27017/medicine',{useNewUrlParser: true,useUnifiedTopology:true },()=>{
//     console.log("dB Connect")
// });

mongoose = require('mongoose'),
config = require('./keys');
const express = require('express')
const PORT = 8000
let routes = require('./routes');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

mongoose.Promise = global.Promise;
/*mongoose.connect("mongodb://localhost:27017/cloth",{ useNewUrlParser : true}, (err) =>{
    if(!err) { console.log('Mongo Connection Succeeded')}
})*/

mongoose.connect(config.DB,  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true } ).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );
  
jwtSecret:"asdasdzxc"
console.log("hello user")
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
                                                                                                                                                                                                                                                                                                                                                                                                                    
})



require('./models/employee')
require('./models/vendor')
require('./models/row')
require('./models/stock')
require('./models/bill')
require('./models/post')




app.use(require('./routes/employee'))
app.use(require('./routes/vendor'))
app.use(require('./routes/row'))
app.use(require('./routes/stock'))
app.use(require('./routes/bill'))
app.use(require('./routes/post'))

const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB database connected");
})
connection.on('error', (e) => console.log("error"));

app.use('/', routes);





// const express    = require('express');
// const app        = express();
// const bodyParser = require('body-parser');
// const mongoose   = require('mongoose');
// const router = express.Router();
// mongoose.connect('mongodb://localhost:27017/medicine',{useNewUrlParser: true,useUnifiedTopology:true },()=>{
//     console.log("dB Connect")
// });
// const Bear  = require('./src/model');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const port = process.env.PORT || 8080;

// router.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

// router.route('/bears')
//     .post(function(req, res) {
//         Bear.create(req.body,function(err) {
//             if (err)
//                 res.send(err);
//             res.json({ message:'Bear created!'});
//         });
//     })

//     .get(function(req, res) {
//         Bear.find(function(err, bears) {
//             if (err)
//                 res.send(err);
//             res.json(bears);
//         });
//     });
// router.route('/bears/:bear_id')
//     .delete(function(req, res) {
//         Bear.remove({
//             _id: req.params.bear_id
//         }, function(err, bears) {
//             if (err)
//                 res.send(err);
//             res.json({ message: 'Successfully deleted' });
//         });
//     });
// router.route('/bears/find')
//     .post(function(req, res) {
//         Bear.find({
//             _id: req.body.id
//         }, function(err, bears) {
//             if (err)
//                 res.send(err);
//             res.json(bears);
//         });
//     });

// router.route('/updatedetails/:bear_id')
//     .put(function(req, res) {
//         Bear.findByIdAndUpdate(req.params.bear_id,{$set:req.body}, function(err, result){
//             if(err){
//                 console.log(err);
//             }

//             res.send('Done')
//         });
//     });
// app.use('/api', router);
// app.listen(port);
// console.log('Magic happens on port ' + port);