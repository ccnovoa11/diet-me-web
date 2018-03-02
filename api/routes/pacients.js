const express = require("express");
const router = express.Router();
const Pacient = require("../models/pacient");

// get all
router.get("/", function (req, res) {
  Pacient.find().exec().then(result =>{
    res.status(200).json({
      message:"These are all the pacients",
      pacients: result
    });
  }).catch(err=>{
    res.status(500).json({
      error:err
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
    }).exec().then(result => {
    console.log(result);
    res.status(200).json({
      message: "Pacient modified",
      "pacient": result
    });
  }).catch();
});

// get by id
router.get("/:pacientId", function (req, res) {
  Pacient.findById({_id:req.params.pacientId}).exec().then(result=>{
    res.status(200).json({
      pacient: result
    });
  }).catch(err=>{
    res.status(500).json({
      error:err
    });
  });
});


//delete
router.delete("/:productId", function (req, res) {
  res.status(200).json({
    message: "delete product"
  });

});




module.exports = router;