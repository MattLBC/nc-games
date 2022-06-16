const axios = require("axios");

const baseURL = axios.create({
  baseURL: "https://boargames-backend.herokuapp.com/api/",
});

export function fetchReviews(category, sort, order) {
  return baseURL.get("/reviews", { params: { category: category, sort_by:sort, order: order} });
}

export function fetchCategories() {
  return baseURL.get("/categories");
}

export function fetchReviewByID(review_id) {
  return baseURL.get(`/reviews/${review_id}`);
}

export function patchReview(review_id, votes) {
  return baseURL.patch(`/reviews/${review_id}`, { inc_votes: votes });
}

export function getComments(review_id) {
  return baseURL.get(`/reviews/${review_id}/comments`);
}

export function postComment(review_id, author, body) {
  return baseURL.post(`/reviews/${review_id}/comments`, { username: author, body: body});
}

export function getUsers() {
  return baseURL.get("/users");
}

export function patchComments(comment_id, votes) {
  return baseURL.patch(`/comments/${comment_id}`, { inc_votes: votes });
}
