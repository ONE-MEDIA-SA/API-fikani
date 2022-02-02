const Publication = (database) => {
    return database.define('publication', { 
        id:{
            type: database.Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: database.Sequelize.STRING
        },
        description: {
            type: database.Sequelize.STRING
        },
        image: {
            type: database.Sequelize.STRING
        }, 
    });
}

module.exports = Publication