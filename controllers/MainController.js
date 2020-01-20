var mongoose = require('mongoose')
var AdminModel = require('../models/AdminUser');



module.exports.MainControllerGet = function (req,res,next) {

res.render('MainView');




}




module.exports.SignInGet = function (req,res,next) {
    

res.render('SignInView')

}

