const gallery = (database) => {
    return database.define('gallery', { 
        id: {
            type: database.Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        exhibitor_id: { 
            type: database.Sequelize.INTEGER,
        },
        image_url: {
            type: database.Sequelize.STRING,
        },
        mimetype: {
            type: database.Sequelize.STRING,
        }
    });
}