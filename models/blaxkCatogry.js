var mongoose =require('mongoose');



var Schema=mongoose.Schema;

var blaxkCatigory = new Schema({
CatigoryName:{type:String,required:true},
CatigoryProdsNum:{type:String,required:true},

});



module.exports=mongoose.model('blaxkCatigory',blaxkCatigory)