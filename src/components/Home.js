import { useEffect, useState } from "react";
import { fetchReviews } from "./Api";
import Loading from "./Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchReviews().then((res) => {
      setReviews(res.data.reviews);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <>
    <h1 className="title">Reviews</h1>
    <div className="reviews">
      {reviews.map((review) => {
        return (
        <div className="reviewCard" style={{backgroundImage: `url(${review.review_img_url})`}} key={review.review_id}>
          <div className="banner">
            <h2 className="reviewTitle">{review.title}</h2>
            <div className="reviewInfo">Posted by: {review.owner} | {review.comment_count} Comments <br></br> Created at: {review.created_at}</div>
            <p className="reviewUser">{review.review}</p>
          </div>
        </div>);
      })}
    </div>
    </>
  );
};

export default Home;
