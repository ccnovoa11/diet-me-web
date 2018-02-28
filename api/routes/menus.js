const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Menu = require("../models/menu");
const checkAuth = require("../middleware/check-auth");


// get all
router.get("/" ,function (req, res) {
  Menu.find().exec().then(function (doc) {

    if (doc.length > 0) {
      console.log(doc);
      res.status(200).json(doc);
    } else {
      res.status(402).json({
        message: "No se torpe, no hay menus! att: El Doc"
      });
    }

  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ error: err });
  });

});

// post
router.post("/" ,checkAuth,function (req, res) {
  
  const items = req.body.food;
  
  var comidas = [];
  var totCalories =0, carbsTot = 0, fatsTot = 0, protein = 0;
  // se recorre la lista de foods para despues añadirlo a una lista que después será añadida al nuevo menu
  for(var i in items){
    comidas.push(items[i]);
    totCalories += items[i].calories;
    carbsTot += items[i].carbs;
    fatsTot+= items[i].fats;
    protein+= items[i].protein;
  }
  // se crea el nuevo menu.
  const menu = new Menu({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    caloriesTot: totCalories,
    carbsTot: carbsTot,
    fatsTot: fatsTot,
    protein: protein,
    food:comidas
  });

  menu.save().then((result) => {
    console.log(result);
    res.status(200).json({
      message: "Handling POST request to /products",
      createdMenu: menu
    });
  }).catch((error)=> {
    console.log(error);
  });


});

// get by id
router.get("/:menuId", function (req, res) {

  const id = req.params.menuId;
  Menu.findById(id).exec().then(function (doc) {
    console.log(doc);
    res.status(200).json(doc);
  }).catch(function (error) {
    console.log(error);
    res.status(500).json({ error: error });
  });
});

//update por id. Se añade un nuevo item al menu.
router.patch("/:menuId",  (req, res) => {
  const id = req.params.menuId;
  Menu.update({_id: id},{$push:{food:req.body}}).exec().then(result =>{
    console.log(result);
    res.status(200).json(result);
  }).catch();
});

//delete. Se borra un menu.

router.delete("/:menuId", function (req, res) {
  const menuId = req.params.menuId;
  Menu.remove({ _id: menuId }).exec().then(function (doc) {
    res.status(200).json(doc);
    console.log(doc);

  }).catch(function (err) {
    res.status(500).json({ error: err });
    console.log(err);
  });

});




module.exports = router;