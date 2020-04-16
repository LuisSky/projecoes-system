const express = require('express');

const app = express();
const routes = require('./config/router');

app.use(routes);

app.use((req, res) => res.status(404).send('Page not found!'));

module.exports = app;
