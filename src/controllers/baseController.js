const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const User = require('../models/userModel');


async function getAllUsers() {
  const users = await User.scope('withoutPassword').findAll();
  return users;
}

module.exports = {
    getAllUsers
}