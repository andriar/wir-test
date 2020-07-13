// const axios = require("axios");
import axios from "axios";

export const fetch = () => {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
    timeout: 4000, // 4 seconds timeout
  });
};
