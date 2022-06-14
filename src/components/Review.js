import { useEffect, useState } from "react";
import { fetchReviewByID } from "./Api";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const Review = () => {
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchReviewByID(review_id).then((res) => {
      setReview(res.data.review);
      setLoading(false);
    });
  }, [review_id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="reviewContainer">
      <img className="reviewImg" src={`${review.review_img_url}`} />
      <div className="reviewContent">
        <h1 className="reviewTitle">{review.title}</h1>
        <div className="reviewMeta">
          <p className="reviewUser">
            <span className="material-symbols-outlined">person</span>
            {review.owner}
          </p>
          <p className="gameDesigner">Designer: {review.designer} | Category: {review.category}</p>
        </div>
        <p className="reviewBody">{review.review_body}</p>
        <p> Posted: {review.created_at} </p>
        <p>
          {" "}
          <span className="material-symbols-outlined">grade</span>{" "}
          {review.votes} |{" "}
          <span className="material-symbols-outlined">forum</span>{" "}
          {review.comment_count}
        </p>
      </div>
    </div>
  );
};

export default Review;
