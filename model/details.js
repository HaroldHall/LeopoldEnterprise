var mongoose  = require('mongoose');  


var details =  new mongoose.Schema( 
    { 
        _id: String , 
        Name : String , 
        Price : String 
    }
); 

module.exports= mongoose.model("details", details); 