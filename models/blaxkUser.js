var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

UserName:{type:String,required:true},
Password:{type:String,required:true},
Email:{type:String,required:true},
FirstName:{type:String,required:true},
LastName:{type:String,required:true},
Address:{type:String,required:true},
PhoneNum:{type:String,required:true}
});

module.exports=mongoose.model('blaxkUser',UserSchema)