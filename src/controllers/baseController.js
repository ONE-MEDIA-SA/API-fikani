const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const User = require('../models/userModel');
const client = require('../config/cache.config');

async function getAllUsers() {
    var users = await client.get('users');
    if (!users) {
        users = await User.findAll();
        client.set('users', JSON.stringify(users), {
            EX: 60 * 5, // cache for 5 minutes
            NX: true
          });
        return users; 
    } else {
        users = JSON.parse(users);
        return users;   
    }
   
}

module.exports = {
    getAllUsers
}