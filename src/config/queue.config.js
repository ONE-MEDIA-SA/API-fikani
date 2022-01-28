const Queue = require('bull');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const redisUrl = process.env.REDIS_URL;

const videoQueue = new Queue('video transcoding', redisUrl);
const emailQueue = new Queue('send email', redisUrl);
const imageQueue = new Queue('image transcoding', redisUrl);

module.exports = {
    videoQueue, emailQueue, imageQueue
}