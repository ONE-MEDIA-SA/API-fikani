const {emailQueue} = require('../config/queue.config');

let email = {name: "Agostinho"}
for(i = 0; i < 100000; i++) {
    email.name = "agostinho"+i;
    emailQueue.add(email)
}

emailQueue.process(async (job) => {
    console.log(job.data)
})