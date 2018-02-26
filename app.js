
const express = require('express');
const app = express();

const menusRoutes = require('./api/routes/menus');
const  pacientsRoutes = require('./api/routes/pacients');

app.use('/menus', menusRoutes);
app.use('/pacients',pacientsRoutes);



module.exports = app;