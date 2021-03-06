const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");


app.use(express.static(path.join(__dirname, "front-end/build")));
const menusRoutes = require("./api/routes/menus");
const pacientsRoutes = require("./api/routes/pacients");
const userRoutes = require("./api/routes/users");
const medicRoutes = require("./api/routes/medics");


mongoose.connect("mongodb://ElVargas:elgranvaron123@ds155278.mlab.com:55278/dietapp");
//mongoose.connect("mongodb://localhost:27017/newDataBase");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*app.use("/static", express.static("front-end/build"));*/

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT", "POST", "PATCH", "DELETE", "GET");
    return res.status(200).json({});
  }
  next();
});

//Rutas  que se encargan de los requests
app.use("/menus", menusRoutes);
app.use("/pacients", pacientsRoutes);
app.use("/users", userRoutes);
app.use("/medics", medicRoutes);

module.exports = app;