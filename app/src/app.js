const express = require('express');
const path = require('path');

const app = express();
const routes = require('./config/router');


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../../public')));
app.set('views', path.join(__dirname, './views'));

app.use(routes);

app.use((req, res) => res.status(404).send('Page not found!'));

module.exports = app;
