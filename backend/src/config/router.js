const express = require('express');
const router = express.Router();


router.use('/', require('../routes/main.js'));
router.use('/users', require('../routes/users.js'));

module.exports = router;
