const axios = require('axios');

const baseURL = "https://boargames-backend.herokuapp.com/api/"

export function fetchReviews(review_id) {
  return axios({
    method: 'get',
    url: baseURL + 'reviews',
    params: {
      review_id: review_id
    }
  })
}