const Order = (database) => {
    const Sequelize = database.Sequelize;
    return database.define('order', { 
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
}

module.exports = Order;