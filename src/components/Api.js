const axios = require('axios');

const baseURL = axios.create({baseURL: "https://boargames-backend.herokuapp.com/api/"})

export function fetchReviews(category) {
  return baseURL.get("/reviews", {params: {category: category}})
}

export function fetchCategories(){
  return baseURL.get("/categories")
}

export function fetchReviewByID(review_id){
  return baseURL.get(`/reviews/${review_id}`)
}

export function patchReview(review_id, votes){
  return baseURL.patch(`/reviews/${review_id}`, {inc_votes: votes})
}

export function getComments(review_id){
  return baseURL.get(`/reviews/${review_id}/comments`)
}