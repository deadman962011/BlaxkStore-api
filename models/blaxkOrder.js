var mongoose = require('mongoose');

var Schema =mongoose.Schema;

var orderSchema = new Schema({
UserName:{type:String,required:true},
cart:{type:Object,required:true},
Address:{type:String,requred:true},
PhoneNum:{type:String,requreid:true},
})

module.exports=mongoose.model('blaxkOrder',orderSchema)