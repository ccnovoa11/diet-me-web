const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Medic = require("../models/medic");


router.post("/", (req, res) => {
  console.log(req.body);
  const medic = new Medic({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    addres: req.body.addres,
    phoneNumbre: req.body.phoneNumbre
  });
  medic.save().then(result =>{
    res.status(200).json({
      message: "Handeling POST to /medics",
      medic: result
    });
  }).catch(err  =>{
    console.log(err);
    res.status(500).json({
      error:err
    });
  });
});

router.get("/", (req,res)=>{
  Medic.find().exec().then(result =>{
    if(result.length>0){
      console.log(result);
      res.status(200).json({
        message:"GET all medics",
        medics: result
      });
    } else{
      res.status(500).json({
        message: "No hay Medicos"
      });
    }
  }).catch(err =>{
    console.log(err);
    res.status(500).json({
      error:err
    });
  });
});

module.exports = router;