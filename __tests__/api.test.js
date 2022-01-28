const axios = require('axios');
const baseUrl = 'http://localhost:5000/api/v1/users/signup';

const data = {
	"name": "Agostinho2",
	"email": "agostinhodev393@gmail.com",
	"password": "onemedia"
}

for(i = 0; i < 1000; i++) {
    myFunction()
}

async function myFunction() {
    await axios.post(baseUrl, data)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log("error");
    });
}
