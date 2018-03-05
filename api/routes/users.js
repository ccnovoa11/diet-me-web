const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Pacient = require("../models/pacient");
const Medic = require("../models/medic");



router.post("/singup", (req, res) => {

  User.find({ email: req.body.email }).exec().then(user => {
    if (user.length >= 1) {
      return res.status(409).json({ message: "Mail already exists" });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({ error: err });
        } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash
          });
          user.save().then(result => {
            console.log(result);
            res.status(200).json({ message: "user created" });
          }).catch(errors => {
            console.log(errors);
            res.status(500).json({
              error: errors
            });
          });
        }
      });

    }
  });
});

router.post("/login", (req, res) => {
  User.find({ email: req.body.email }).exec().then(user => {
    if (user.length < 1) {
      return res.status(401).json({
        message: "Auth fail"
      });
    }
    bcrypt.compare(req.body.password, user[0].password, (err, response) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth fail"
        });
      }
      if (response) {

        const token = jwt.sign({
          email: user[0].email,
          userid: user[0]._id,
          medic: user[0].medic
        },
          "elgranvaron",
          {
            expiresIn: "1h"
          });
        return res.status(200).json({
          message: "Auth successful",
          token: token,
          userId: user[0]._id,
          medic: user[0].medic
        });
      }
      res.status(401).json({
        message: "Auth fail"
      });

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

router.get("/:idUser", (req, res) => {
  Medic.find({ user: req.params.idUser }).exec().then(result => {
    console.log(result);
    if (result.length < 1) {
      Pacient.find({ user: req.params.idUser }).exec().then(result2 => {
        console.log(result2[0]._id);
        return res.status(200).json({
          idPacient: result2[0]._id

        });
      }).catch(err => {
        res.status(500).json({
          error: err
        });
      });
    } else {
      return res.status(200).json({
        idMedic: result[0]._id
      });
    }
  }).catch(err2 => {
    res.status(500).json({
      error: err2,
      message: "es del medico"
    });
  });
});

router.delete("/:userId", (req, res) => {
  User.remove({ _id: req.params.userId }).exec().then(() => {
    res.status(200).json({ message: "cbro, eliminó a un usuario" });
  }).catch(err => {
    res.status(500).json({ error: err });
  });
});

module.exports = router;
