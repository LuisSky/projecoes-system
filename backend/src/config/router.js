const express = require('express');
const router = express.Router();


router.get('/', require('../routes/main.js'));

module.exports = router;
