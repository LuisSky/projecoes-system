const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  return res.status(401).render('signin');
});

module.exports = router;
