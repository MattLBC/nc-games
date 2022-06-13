const axios = require('axios');

const baseURL = "https://boargames-backend.herokuapp.com/api/"

export function fetchReviews() {
  return axios({
    method: 'get',
    url: baseURL + 'reviews',
  })
}