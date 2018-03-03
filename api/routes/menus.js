const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Menu = require("../models/menu");
const Pacient = require("../models/pacient");
const authAll = require("../middleware/auth-all");

// get all
router.get("/", authAll,function (req, res) {
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

// get menus de un paciente
router.post("/menusPac", authAll,(req, res) => {
  Pacient.findById({ _id: req.body.idPacient }).populate("menus").exec().then((result) => {
    res.status(200).json({
      menus: result.menus
    });
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

// post
router.post("/", authAll,function (req, res) {

  const items = req.body.food;
  var comidas = [];
  var totCalories = 0, carbsTot = 0, fatsTot = 0, protein = 0;
  // se recorre la lista de foods para despues añadirlo a una lista que después será añadida al nuevo menu
  for (var i in items) {
    comidas.push(items[i]);
    totCalories += items[i].calories;
    carbsTot += items[i].carbs;
    fatsTot += items[i].fats;
    protein += items[i].protein;
  }
  // se crea el nuevo menu.
  const menu = new Menu({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    caloriesTot: totCalories,
    carbsTot: carbsTot,
    fatsTot: fatsTot,
    protein: protein,
    food: comidas
  });
  menu.save();
  Pacient.update({ _id: req.body.pacientId }, { $push: { menus: menu } }).exec().then(() => {
    res.status(200).json({
      message: "A new Menu was added to your list",
      menu: menu
    });
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });

});

// get by id
router.get("/:menuId", authAll,function (req, res) {

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
router.patch("/:menuId", authAll,(req, res) => {
  const id = req.params.menuId;
  Menu.findById({ _id: id }).exec().then(result1 => {
    var calories = (result1.caloriesTot + req.body.calories);
    var carbs = result1.carbsTot + req.body.carbs;
    var fats = result1.fatsTot + req.body.fats;
    var protein = result1.protein + req.body.protein;

    Menu.update({ _id: id },
      { $push: { food: req.body } }).exec();
    Menu.update({_id:id},{$set:{
      caloriesTot:calories,
      fatsTot: fats,
      protein: protein,
      carbsTot: carbs
    }}).exec().then(result2 =>{
      console.log(result2);
      res.status(200).json({
        message: "a new item was added to your menu."
      });

    }).catch();

  });
});

//delete a item from de food list 

//delete. Se borra un menu.

router.delete("/:menuId", authAll,function (req, res) {
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