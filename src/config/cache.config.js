const {createClient} = require('redis');

createClient({
    url: 'redis://127.0.0.1:6379'
})
const client = createClient();


module.exports = client;