const express = require('express');
const router = express.Router();

const arrayUsers = [
  { name: 'Brad', mail: 'brad@mail.com' },
  { name: 'Mia', mail: 'Mia@mail.com' },
  { name: 'John', mail: 'john@mail.com' }
];

router.get('/', (req, res) => {
  return res.status(200).json(arrayUsers);
});

module.exports = router;