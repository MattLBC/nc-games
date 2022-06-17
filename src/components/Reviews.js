import { useEffect, useState } from "react";
import { fetchReviews } from "./Api";
import Loading from "./Loading";
import NoCat from "./errors/NoCat";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";

const Reviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [descend, setDescend] = useState(true);
  const [exists, setExists] = useState(true);
  const { category, sort } = useParams();

  let order = "";

  if (descend) {
    order = "desc";
  } else {
    order = "asc";
  }

  useEffect(() => {
    setLoading(true);
    setExists(true);
    fetchReviews(category, sort, order).then((res) => {
      setReviews(res.data.reviews);
      setLoading(false);
    }).catch((err) => {
      setExists(false);
      setLoading(false);
    })
  }, [category, sort, descend]);

  if (loading) {
    return <Loading />;
  }

  if (!exists) {
    return <NoCat />;
  }

  return (
    <>
      <h1 className="title">Reviews</h1>
      <button
        className="order"
        onClick={() => {
          setDescend(!descend);
        }}
      >
        {descend ? "Descending" : "Ascending"}
      </button>
      <div className="reviews">
        {reviews.map((review) => {
          return (
            <div
              className="reviewCard"
              style={{ backgroundImage: `url(${review.review_img_url})` }}
              key={review.review_id}
            >
              <div className="banner">
                <Link to={`/review/${review.review_id}`}>
                  <h2 className="reviewTitle">{review.title}</h2>
                </Link>
                <div className="reviewInfo">
                  <span className="material-symbols-outlined">person</span>{" "}
                  {review.owner} | {review.comment_count}{" "}
                  <span className="material-symbols-outlined">forum</span> |{" "}
                  {review.votes}{" "}
                  <span className="material-symbols-outlined">grade</span>
                  <br></br> Posted at: {`${dayjs(review.created_at)}`}
                </div>
                <p className="reviewUser">{review.review}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
