const express = require('express');
const router = express.Router();


router.use('/', require('../controllers/main.js'));
router.use('/users', require('../controllers/users.js'));
router.use('/signin', require('../controllers/signin.js'));

module.exports = router;
