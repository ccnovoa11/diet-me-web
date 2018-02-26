
const express = require('express');
const app = express();

const productRoutes = require('./api/routes/menus');

app.use('/menus', productRoutes);



module.exports = app;