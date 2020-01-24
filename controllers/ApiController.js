var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var ProductModel = require('../models/blaxkProduct');
var UserModel = require('../models/blaxkUser');
var OrderModel = require('../models/blaxkOrder');



module.exports.fetchProdsGet = function(req,res,next){

ProductModel.find({},function(err,result){
   

if(!err){

    res.status(200).json(result)

}

})
}


module.exports.ProdOne = function(req,res,next){ 
ProductModel.findById(req.params.id,function(err,result){
    if(!err)
{
    res.status(200).json(result)
}})

 }


module.exports.UserSignUp = function(req,res,next){  

    UserModel.find({UserName:req.body.UserNameI},function(err,result){
     if(!err){
         if(result.length === 1){
             res.status(403).json({'message':'username exsist'})
         }
         else{
               User=new UserModel();
               User.UserName= req.body.UserNameI;
               User.FirstName= req.body.FirstNameI;
               User.LastName = req.body.LastNameI;
               User.Email = req.body.EmailI;
               User.Password = req.body.Password2I;
               User.PhoneNum = req.body.PhoneNumI;
               User.Address = req.body.AddressI;
               User.save(function(err,result2){
                  
               if(!err){
                res.status(200).json(result2)
               }
               })
        }
     }
 })
 }


module.exports.UserSignIN = function(req,res,next){  

    UserModel.findOne({UserName:req.body.UserNameI,Password:req.body.PasswordI},function(err,result){
        if(!err){
            if(result == null){
                res.status(403).json({message:'user not Found'})
            }
            else{
                var UserName=result.UserName;
                var UserId = result._id
                 var token =jwt.sign({UserName,UserId},"blaxkStore",{expiresIn:'1h'})
                res.status(200).json({UserName:result.UserName,token:token})               
            }            
        }
    })
 }


module.exports.OrderSave = function(req,res,next){  

order = new OrderModel();
order.UserName= req.body.UserName;
order.cart= req.body.cart;
order.Adress =req.body.Address;
order.PhoneNum = req.body.PhoneNum;
order.save(function(err,result){
    console.log(result)
})

}