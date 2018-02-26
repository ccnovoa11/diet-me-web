
const express = require('express');
const app = express();
const morgan = require('morgan');

const menusRoutes = require('./api/routes/menus');
const  pacientsRoutes = require('./api/routes/pacients');

app.use(morgan('dev'));

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