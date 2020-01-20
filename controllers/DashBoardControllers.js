var mongoose = require('mongoose');
var CatigoryModel = require('../models/blaxkCatogry');
var Image = require('../models/imagesSession');
var productModel = require('../models/blaxkProduct');



module.exports.MainControler = function(req,res,next){ 

    res.render('MainDashboard');

}

module.exports.AddCatGet = function(req,res,next){  

CatigoryModel.find({},function(err,result){
    if(!err){
    
        res.render("AddCatView",{catigories:result})
    }
})



}



module.exports.AddCatPost = function(req,res,next){  

var Catigory = new CatigoryModel();

Catigory.CatigoryName=req.body.catigoryNameI;
Catigory.CatigoryProdsNum=0;

Catigory.save(function(err,result){
    if(!err){
        res.redirect('./')
    }
});

}






module.exports.DelCatGet = function(req,res,next){ 
var CatID = req.params.CatId;


CatigoryModel.findById(CatID,function(err,result){

if(!err){
    result.remove(function(err2){
        if(!err2){
            res.redirect('./')
        }
    });
}

})


 }





module.exports.AddProductGet = function(req,res,next){  
    var imgSession = new Image(req.session.images ? req.session.images : {});

CatigoryModel.find({},function(err,result){
    if(!err){
        res.render('AddProductView',{catigories:result,Images:imgSession.getItems()})
    }
})


}


module.exports.AddProductPost = function(req,res,next){  


var prodSizeI=req.body.ProdSizeI;
var ProdSizeArr =prodSizeI.split(',')

var imgSession = new Image(req.session.images ? req.session.images : {});


var product = new productModel();
product.ProdName =req.body.ProdNameI;
product.ProdImages =imgSession.getItems();
product.ProdCatigory= req.body.ProdCatigoryI;
product.ProdRate= req.body.ProdRateI;
product.ProdPrice=req.body.ProdPriceI;
product.ProdSize=ProdSizeArr;
product.ProdBrand= req.body.ProdBrandI;
product.ProdDesc=req.body.ProdDescI;

product.save(function(err,result){

if(!err){
    console.log(result)
    req.session.images = null;
    res.redirect('./')
}
})   
}






module.exports.AddImageGet = function(req,res,next){ 
var imgSession = new Image(req.session.images ? req.session.images : {});

res.render('AddImageView',{images:imgSession.getItems()})

 }


 module.exports.AddImgPost = function(req,res,next){ 
    var imgSession = new Image(req.session.images ? req.session.images : {});
    var image = {imgSrc:req.body.imgSrcI} ;
    imgSession.add(image,image.imgSrc);
    req.session.images = imgSession;


 console.log(imgSession.getItems())
 res.redirect('./')

  }