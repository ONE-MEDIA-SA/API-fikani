const { Sequelize } = require("sequelize");
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});

 
  const sequelize = process.env.ENV === "dev" ?
    new Sequelize({
    dialect: "postgres",
    protocol: "postgres",
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: true
    }) :
  
    new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      protocol: 'postgres',
      logging:true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
      }
    });

(async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
  
  sequelize.sync({ force: true }).then(() => {
    console.log("Drop and create")
  }).catch(error => {
    console.error("Unable to force: ", error)
  });

  process.on('SIGINT', async () => {
    await sequelize.close(() => {
      console.info("Connection has been closed successfully.")
    })
      // .then(() => console.info("Connection has been closed successfully."))
      // .catch(error => console.error("Unable to close the connection: ", error.message))
      // .finally( process.exit(0))
    process.exit(0)
  })
})();


module.exports = sequelize;