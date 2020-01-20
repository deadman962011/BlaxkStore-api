var express = require('express');

var router = express.Router();

var DashboardController = require('../controllers/DashBoardControllers');


router.get('/',DashboardController.MainControler);   

router.get('/Catigory',DashboardController.AddCatGet);   

router.post('/Catigory',DashboardController.AddCatPost);   

router.get('/Catigory/:CatId',DashboardController.DelCatGet); 

router.get('/AddProduct',DashboardController.AddProductGet); 

router.post('/AddProduct',DashboardController.AddProductPost);   

router.get('/AddProduct/AddImg',DashboardController.AddImageGet);   

router.post('/AddProduct/AddImg',DashboardController.AddImgPost);   





module.exports = router;