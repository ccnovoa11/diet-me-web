const express = require("express");
const router = express.Router();
const Pacient = require("../models/pacient");
const mongoose = require("mongoose");
const Day = require("../models/day");
const Menu = require("../models/menu");

// get all
router.get("/", function (req, res) {
  Pacient.find().populate("dia").exec().then(result => {
    res.status(200).json({
      message: "These are all the pacients",
      pacients: result
    });
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

//update info de la información del paciente

router.patch("/:idPacient", (req, res) => {
  Pacient.update({ _id: req.params.idPacient },
    {
      $set:
        {
          age: req.body.age,
          sex: req.body.sex,
          weight: req.body.weight,
          height: req.body.height,
          bmi: req.body.bmi,
          whyLose: req.body.whyLose,
          lifeStyle: req.body.lifeStyle,
          sport: req.body.sport,
          intensity: req.body.intensity,
          muchTime: req.body.muchTime,
          dietType: req.body.dietType,
        }
    }).exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Pacient modified",
        "pacient": result
      });
    }).catch();
});

// get by id
router.get("/:pacientId", function (req, res) {
  Pacient.findById({ _id: req.params.pacientId }).populate("dia").exec().then(result => {
    res.status(200).json({
      pacient: result
    });
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
});


//delete
router.delete("/:productId", function (req, res) {
  console.log(new Date());
  res.status(200).json({
    message: "delete product"
  });

});

//Crea un nuevo día

router.post("/createDay", (req, res) => {
  var nDay = new Day({
    _id: mongoose.Types.ObjectId(),
    date: new Date(),
    dayCalories: req.body.dayCalories
  });
  nDay.save().then(result => {
    res.status(200).json({
      message: "day created",
      day: result
    });
    Pacient.update({ _id: req.body.idPacient }, { $push: { dia: nDay } }).exec().then(() => {
      res.status(200).json({
        message: "A day was added to the pacient"
      });
    }).catch(err => {
      res.status(500).json({
        error: err
      });
    });
  }).catch(err => {
    res.status(200).json({
      error: err
    });
  });

});


//agregar menus a un día.
// Este man me manda el id del menu y el del día
router.post("/addMenu", (req, res) => {
  Menu.findById({_id: req.body.idMenu}).exec().then(result=>{
    console.log(result);
    Day.update({_id:req.body.idDay}, {$push:{menus:result}}).exec().then(()=>{
      
      res.status(200).json({
        message: "Menu added to day",
        menu: result
      });
    }).catch(err =>{
      res.status(500).json({
        error:err
      });
    });
  }).catch();
  
});


//get Menus from 




module.exports = router;