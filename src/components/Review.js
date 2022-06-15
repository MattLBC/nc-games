import { useEffect, useState } from "react";
import { fetchReviewByID, patchReview } from "./Api";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const Review = () => {
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState([]);
  const [votes, setVotes] = useState(0);
  const { review_id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchReviewByID(review_id).then((res) => {
      setReview(res.data.review);
      setLoading(false);
    });
  }, [review_id]);

  const voteError = (event) => {
    alert("Error voting");
    event.target.disabled = false;
    setVotes(0);
  };

  const handleVote = (event, vote) => {
    setVotes(vote);
    event.target.disabled = true;
    patchReview(review_id, vote)
      .then((res) => {
        if (res.status !== 201) {
          voteError(event);
        }
      })
      .catch((err) => {
        voteError(event);
      });
  };

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
          <p className="gameDesigner">
            Designer: {review.designer} | Category:{" "}
            {review.category.replace(/-/g, " ")}
          </p>
        </div>
        <p className="reviewBody">{review.review_body}</p>
        <p> Posted: {`${dayjs(review.created_at)}`} </p>
        <p>
          {" "}
          <span className="material-symbols-outlined">grade</span>{" "}
          {review.votes + votes} |{" "}
          <span className="material-symbols-outlined">forum</span>{" "}
          {review.comment_count}
        </p>
        <div className="votes">
          <button
            className="upvote"
            onClick={(event) => {
              handleVote(event, 1);
            }}
          >
            <span className="material-symbols-outlined">thumb_up</span>
          </button>
          <button
            className="downvote"
            onClick={(event) => {
              handleVote(event, -1);
            }}
          >
            <span className="material-symbols-outlined">thumb_down</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
