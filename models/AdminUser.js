var mongoose =require('mongoose');



var Schema=mongoose.Schema;

var AdminSchema = new Schema({
AdminUser:{type:String,required:true},
AdminPass:{type:String,required:true},

});

AdminSchema.methods.verifyPassword = function(AdminPass){
    if(this.AdminPass == AdminPass){
        return AdminPass;
    }
}


module.exports=mongoose.model('AdminUser',AdminSchema)