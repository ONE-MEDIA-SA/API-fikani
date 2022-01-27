const validator = require("validator");
const bcrypt = require("bcryptjs");

const Sequelize = require('sequelize');
const database = require('../config/db.config')

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
    }
    
})

module.exports = User