
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./config/router.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../../public')));
app.set('views', path.join(__dirname, './views'));

app.use(routes);

app.use((req, res) => res.status(404).send('Page not found!'));

module.exports = app;
