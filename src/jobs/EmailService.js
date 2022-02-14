const {emailQueue} = require('../config/queue.config');
const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv');

dotenv.config({
    path: '../../config.env'
})

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/**
 * @emailService
 * @to - 
 */
function emailService(to, message, subject) {
    // const msg = {
    //     to: this.to, // Change to your recipient
    //     from: 'agostinhodossantos27@gmail.com', // Change to your verified sender
    //     subject: this.subject,
    //     html: this.message,
    // } 
    const msg = {
        to: 'agostinhodev@gmail.com', // Change to your recipient
        from: 'agostinhodossantos27@gmail.com', // Change to your verified sender
        subject: "test",
        html: `<h1> Hello world </h1>`,
    } 

    send(msg)
    //emailQueue.add(send(msg))   
}

function send(msg) {
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}


emailQueue.process(async (job) => {
    console.log(job)
})

module.exports = emailService