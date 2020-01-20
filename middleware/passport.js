var passport = require('passport');
var AdminUsers = require('../models/AdminUser');
var LocalStrategy = require('passport-local').Strategy;


passport.serializeUser(function (user,done) {
    done(null,user)
})

passport.deserializeUser(function (id,done) {
    AdminUsers.findById(id,function(err,user){
        done(err,user);
    })
})

passport.use('local.signin',new LocalStrategy({usernameField:'AdminUserI',passwordField:'AdminPassI',passReqToCallback:true},function(req,username,password,done){
    
    
    AdminUsers.findOne({AdminUser:username},function(err,user){
       if(err){
        return done(err);
       }
    
        if(!user){
            return done(null, false);
        }
        if(!user.verifyPassword(password)){
            return done(null,false)
        }

        return done(null,user)






    })
}))