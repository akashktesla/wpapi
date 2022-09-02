const axios = require('axios');

axios
  .get('http://127.0.0.1:8080/')
  .then(res => {
    console.log(res["data"]);
  })
  .catch(error => {
    console.error(error);
  });
