const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Medic = require("../models/medic");
const User = require("../models/user");
const Pacient = require("../models/pacient");
const bcrypt = require("bcrypt");
const check = require("../middleware/check-auth");

//Se crea un nuevo Medico en la ruta. 
router.post("/singup", (req, res)=>{

  User.find({email:req.body.email}).exec().then(user =>{
    if(user.length >= 1){
      return res.status(409).json({message:"Mail already exists"});
    }else{
      bcrypt.hash(req.body.password,10,(err, hash)=>{
        if(err){
          return res.status(500).json({error:err});
        }else{
          const user = new User({
            _id : new mongoose.Types.ObjectId(),
            email : req.body.email,
            password: hash,
            medic: true
          }); 
          user.save();
          const medic = new Medic({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            addres: req.body.addres,
            phoneNumbre: req.body.phoneNumbre,
            user: user
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
        }
      });

    }
  });
});


// get de todos los medicos que se encuentran en la base de datos
router.get("/", (req,res)=>{
  Medic.find().populate("pacients").exec().then(result =>{
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

router.get("/a", (req,res)=>{
   res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

//GET MEDIC BY ID
router.get("/:medicId", (req,res) =>{
  Medic.findById({_id: req.params.medicId}).populate("pacients").exec().then(result=>{
    var objs={
      path:"pacients.menus",
      model: "Menu"
    };
    mongoose.model("Medic").populate(result, objs,(err,popo)=>{
      res.status(200).send(popo);
    });
    
  }).catch(err =>{
    res.status(500).json({
      error:err
    });
  });
});

//buscar los paciente de un medico

router.post("/lista", (req,res)=>{
  Medic.findById({_id: req.body.medicId}).exec().populate("pacients").then(result=>{
    res.status(200).json({
      pacients: result.pacients
    });
  }).catch(err =>{
    res.status(500).json({
      error:err
    });
  });
});


// crear un paciente
router.post("/createPacient", check,(req,res)=>{
  User.find({email:req.body.email}).exec().then(user =>{
    if(user.length>=1){
      return res.status(409).json({
        message:"Mail already exists"
      });
    }else{
      bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
          return res.status(500).json({error:err});
        } else{
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash,
            medic: false
          });
          user.save();
          const pacient = new Pacient({
            _id: new mongoose.Types.ObjectId(),
            name : req.body.name,
            user: user
          });
          pacient.save();
          Medic.update({_id:req.body.idMedic}, {$push:{pacients:pacient}}).exec().then(()=>{
            res.status(200).json({
              message:"pacient added to the medic's list",
            });
          }).catch(err=>{
            res.status(500).json({
              error:err
            });
          });
        }
      });
    }
  });
});
module.exports = router;