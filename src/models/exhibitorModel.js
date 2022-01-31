const validator = require('validator');

const Sequelize = require('sequelize');
const database = require('../config/db.config');
const {decryptPassword} = require('../utils/validator');

const Exhibitor = database.define('exhibitor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
     },
    password: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
    },
    website: {
        type: Sequelize.STRING,
    },
    location: {
        type: Sequelize.STRING,
    },
    profile_url: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
    },
    about: {
        type: Sequelize.STRING,
    }
})

module.exports = Exhibitor;