const {decryptPassword} = require("../utils/validator");
const database = require('../config/db.config');
let Sequelize = database.Sequelize;

const User = database.define('users', {
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
    },
    role: {
        type: Sequelize.STRING
    }
    
});

// User().prototype.comparePassword = function (password, user_password) {
//    return decryptPassword(password, user_password)
// }

module.exports = User