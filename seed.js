const config = require('./config');
const mongoose = require('mongoose');
const parser = require('csv-parse/lib/sync');
const fs = require('fs');
const path = require('path');  
const detail = require('./model/details');

function seedDB(){
  
const sourceData = fs.readFileSync(path.join(__dirname, config.sourceData), 'utf8');
const documents = parser(sourceData, { columns: true, skip_empty_lines: true });
console.log(documents);
detail.insertMany(documents, function(err){
      if (err) {
        console.log(err); 
       
      }else { 
        console.log('this was an success');
      } 
});   

/* detail.find({}, (data)=>{ 
  console.log(data);
}); */
   
    
} 
  module.exports = seedDB;