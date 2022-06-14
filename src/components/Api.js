const axios = require('axios');

const baseURL = axios.create({baseURL: "https://boargames-backend.herokuapp.com/api/"})

export function fetchReviews(category) {
  return baseURL.get("/reviews", {params: {category: category}})
}

export function fetchCategories(){
  return baseURL.get("/categories")
}