const express = require('express');
const router = express.Router();

router.get('/signin', (req, res) => {
  return res.status(200).render('signin');
});

router.post('/signin', (req, res) => {
  return res.status(401).render('signin');
});

module.exports = router;
