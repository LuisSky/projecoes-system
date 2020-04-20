const express = require('express');
const router = express.Router();

const userModel = require('../models/users.js');

router.get('/', async (req, res) => {
  const users = await userModel.getUsers();
  return res.status(200).json(users);
});

router.post('/', async (req, res) => {
  const user = await userModel.addUser(req.body);
  return res.status(201).json(user);
});

module.exports = router;