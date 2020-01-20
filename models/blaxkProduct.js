var mongoose = require('mongoose')

var Schema = mongoose.Schema;

blaxkProduct = new Schema({
ProdName:{type:String,required:true},
ProdPrice:{type:String,required:true},
ProdCatigory:{type:String,require:true},
ProdRate:{type:String,required:true},
ProdImages:{type:Object,required:true},
ProdDesc:{type:String,required:true},
ProdBrand:{type:String,required:true},
ProdSize:{type:Object,require:true}

})

module.exports=mongoose.model('blaxkProduct',blaxkProduct)
