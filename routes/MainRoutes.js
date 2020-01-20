var express = require('express')
var passport = require('passport');
var router = express.Router();


var MainController =require('../controllers/MainController');


router.get('/',MainController.MainControllerGet);

router.get('/SignIn',MainController.SignInGet);

router.post('/SignIn',passport.authenticate('local.signin',{successRedirect:'/Dashboard',failureRedirect:'./'}))


module.exports = router;