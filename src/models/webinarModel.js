const Webinar = (database) => {
    return database.define('webinar', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        video_url: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        category: {
            type: Sequelize.STRING,
        },
        thumbnail: {
            type: Sequelize.STRING,
        },
        is_live: {
            type: Sequelize.boolean,
        },
       
    });
}