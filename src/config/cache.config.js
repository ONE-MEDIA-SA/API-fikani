const {createClient} = require('redis');
const AppError = require("../utils/appError");

var client;

(async () => {
    client = createClient({
        url: 'redis://127.0.0.1:6379'
    })
    
  
    client.on('error', (err) => console.log('Redis Client Error', err));
  
    await client.connect();

  })();

module.exports = client;