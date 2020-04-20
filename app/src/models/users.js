const { User } = require('../../models');

const getUsers = async () => {
  return await User.findAll();
};

const addUser = async (userData) => {
  return await User.create(userData);
};

module.exports = {
  addUser,
  getUsers,
};
