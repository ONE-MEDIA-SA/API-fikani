const Exhibitor = (database) => {
     return database.define('exhibitor', { 
        id: {
            type: database.Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: database.Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: database.Sequelize.STRING,
            allowNull: false,
         },
        password: { 
            type: database.Sequelize.STRING,
            allowNull: false
        },
        category: {
            type: database.Sequelize.STRING,
        },
        website: {
            type: database.Sequelize.STRING,
        },
        location: {
            type: database.Sequelize.STRING,
        },
        profile_url: {
            type: database.Sequelize.STRING,
        },
        phone: {
            type: database.Sequelize.STRING,
        },
        about: {
            type: database.Sequelize.STRING,
        }
    });
}


module.exports = Exhibitor;