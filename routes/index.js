var express = require('express');
var router = express.Router();
var detail = require('../model/details');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); 

router.get('/products', (req, res, next) => {
  detail.find({})
   .then(results => res.json(results))
   .catch(err => res.send(err)); 
   
}); 

router.post('/products', (req,res,next)=>{ 
 const{ _id ,Name, Price} = req.body ;   

 console.log(name);
   detail.create({ _id:_id, name:name , Price: Price },(err)=>{ 
    if(err){ 
      console.log("didnt add");
    }else{ 
      console.log("this worked"); 
    } 
  }); 

}); 
module.exports = router;
