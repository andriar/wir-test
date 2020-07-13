const axios = require("axios");

// Make a request for a user with a given ID
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function(response: any) {
    // handle success
    console.log(response);
  })
  .catch(function(error: any) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });
