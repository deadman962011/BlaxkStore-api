const express = require('express');
const mongoose = require('mongoose')
const pug = require('pug');
const morgan = require('morgan');
const path = require('path');
const app = express();




// connect to mongodb

mongoose.connect('mongodb://127.0.0.1/blaxkStore',{ useNewUrlParser: true });

//







// app managment
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));
//








app.listen(4000,function (err) {

  console.log(err)
if(!err){
  console.log('BlaxkStore-Api connected on 3000');
}

})
