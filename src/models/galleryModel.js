const database = require('../config/db.config');
let Sequelize = database.Sequelize;

const Gallery = database.define('gallery', { 
    id: {
        type: database.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    exhibitor_id: { 
        type: database.Sequelize.INTEGER,
    },
    url: {
        type: database.Sequelize.STRING,
    },
    mimetype: {
        type: database.Sequelize.STRING,
    }
});

module.exports = Gallery;