const database = require('../config/db.config');
let Sequelize = database.Sequelize;

const Product = database.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    merchant_id: {
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
    },
    category: {
        type: Sequelize.STRING,
    },
    image: {
        type: Sequelize.STRING,
    },
    quantity: {
        type: Sequelize.INTEGER,
    },
    unit_type: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
    },
 });