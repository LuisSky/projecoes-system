const { User } = require('../../models');
const bcrypt = require('bcrypt');

const genSalt = 8;

const getHashPassword = async (pass) => bcrypt.hashSync(pass, genSalt);

const getUsers = async () => {
  return await User.findAll();
};

const addUser = async (userData) => {

  const newUser = { ...userData };
  newUser.password = await getHashPassword(userData.password);
  return await User.create(newUser);
};

module.exports = {
  addUser,
  getUsers,
};
