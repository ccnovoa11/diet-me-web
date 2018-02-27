
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const menusRoutes = require('./api/routes/menus');
const  pacientsRoutes = require('./api/routes/pacients');

//
// mongoose.connect('mongodb+srv://dietme-admin:'+ process.env.MONGO_ATLAS_PW +'@diet-me-node-2fyty.mongodb.net/test',{});

mongoose.connect('mongodb://localhost:27017/test');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req,res,next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', '*');
   if(req.method == 'OPTIONS'){
       res.header('Access-Control-Allow-Methods', 'PUT','POST','PATCH','DELETE', 'GET');
        return res.status(200).json({});
   }
   next();
});

//Rutas  que se encargan de los requests
app.use('/menus', menusRoutes);
app.use('/pacients',pacientsRoutes);


app.use(function(req,res,next){
   const error = new Error('Not found');
   error.status(404);
   next(error);
});


app.use(function(error, req, res, next){
    res.status(err.status|| 500);
    res.json({
        message:error.message
    });
});


module.exports = app;