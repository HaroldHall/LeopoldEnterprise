var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');  
var mongoose = require('mongoose'); 
var db_url = process.env.MONGOHQ_URL ||"mongodb+srv://haroldhall:Dobmay71997@cluster0.qbsvl.mongodb.net/Products?retryWrites=true&w=majority";
mongoose.connect(db_url,{useUnifiedTopology: true  });
var productRouter= require('./routes/products')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); 
const Port = process.env.PORT || 8080;
const cors = require('cors'); 
var app = express(); 
var seed = require('./seed'); 
 
          
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());  
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter); 
app.use('/products',productRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.get('*',(req,res)=>{ 
  res.sendFile(path.join(__dirname,'public/index.html'));
})

app.listen(Port, function () {
  console.log('Example app listening on port ' + Port + '!');
});
module.exports = app;
