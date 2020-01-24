var express = require('express');

var ApiController = require('../controllers/ApiController');
var router = express.Router();

router.get('/ProdAll',ApiController.fetchProdsGet);   

router.get('/ProdOne/:id',ApiController.ProdOne); 

router.post('/OrderSave',ApiController.OrderSave);   

router.post('/UserSignUp',ApiController.UserSignUp);

router.post('/UserSignIn',ApiController.UserSignIN);   








module.exports = router;