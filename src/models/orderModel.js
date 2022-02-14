const database = require('../config/db.config');
let Sequelize = database.Sequelize;


const Order = database.define('order', { 
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,  
    },
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    product_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    exhibitor_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
    }
});

modle.exports = Order;