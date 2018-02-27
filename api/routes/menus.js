const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Menu = require('../models/menu');


// get all
router.get('/', function (req, res, next) {
   Menu.find().exec().then(function(doc){

       if(doc.length>0){
           console.log(doc);
           res.status(200).json(doc);
       }else{
           res.status(402).json({
               message:'No se torpe, no hay menus! att: El Doc'
           })
       }

   }).catch(function(err){
       console.log(err);
       res.status(500).json({error:err});
   })
    
});

// post
router.post('/', function (req, res, next) {
    const menu = new Menu({
        _id: new mongoose.Types.ObjectId(),
        name : req.body.name,
        caloriesTot:req.body.caloriesTot,
        carbsTot:req.body.carbsTot,
        fatsTot:req.body.fatsTot,
        protein:req.body.protein

    });
    menu.save().then(function (result) {
        console.log(result);
        res.status(200).json({
            message:'Handling POST request to /products',
            createdMenu: menu
        });
    }).catch(function (error){
        console.log(error);
    });


});

// get by id
router.get('/:menuId', function (req,res,next) {

    const id = req.params.menuId;
    Menu.findById(id).exec().then(function (doc) {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(function(error){
        console.log(err);
        res.status(500).json({error:err});
    })
});

//update por id

router.patch('/:menuId', function (req, res, next) {
    res.status(200).json({
        message: 'update product'
    });
    
});

//delete

router.delete('/:menuId', function (req, res, next) {
    const menuId = req.params.menuId;
    Menu.remove({_id:menuId}).exec().then(function(doc){
        res.status(200).json(doc);
        console.log(doc);

    }).catch(function(err){
        res.status(500).json({error:err});
        console.log(err);
    })

});




module.exports = router;