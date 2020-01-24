const express = require('express');
const mongoose = require('mongoose')
const pug = require('pug');
const morgan = require('morgan');
const path = require('path');
var passport = require('passport');
var session = require('express-session');
const app = express();




// connect to mongodb

mongoose.connect('mongodb://127.0.0.1/BlaxkStore',{ useUnifiedTopology: true,useNewUrlParser: true });
require('./middleware/passport')
//







//require route files
const MainRoute=require('./routes/MainRoutes')
const DashboardRoute=require('./routes/DashboardRoutes')
var ApiRoute = require('./routes/ApiRoutes');
//



// app managment
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'blaxkStoreApi',
    resave: false,
    saveUninitialized: true
  }))
app.use(passport.initialize())
app.use(passport.session())
  

  



app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));
//
app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
  });




//routes managment

app.use('/',MainRoute)
app.use('/Dashboard',DashboardRoute)
app.use('/Api',ApiRoute)

//



app.listen(3000,function (err) {

  console.log(err)
if(!err){
  console.log('BlaxkStore-Api connected on 3000');
}

})
