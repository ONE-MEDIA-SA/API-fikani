const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const axios = require('axios')

async function getAllUsers() {
  return await axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
      return response.data
  })
  .catch(function (error) {
    return response
  })
  
}

module.exports = {
    getAllUsers
}