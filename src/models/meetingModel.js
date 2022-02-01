const Meeting = (database) => {
    const Sequelize = database.Sequelize;
    return database.define('meeting', { 
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        id_exhibitor:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_user: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        meeting_url:{
            type: Sequelize.STRING,
        },
        start_datetime:{
            type: Sequelize.DATE(6),
        },
        end_datetime:{
            type: Sequelize.DATE(6),
        },
        is_happened:{
            type: Sequelize.BOOLEAN,
        }
    })
}

module.exports = Meeting;