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
    na
})