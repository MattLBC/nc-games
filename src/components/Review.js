import { useEffect, useState } from "react";
import { fetchReviewByID, patchReview } from "./Api";
import Comments from "./Comments";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const Review = () => {
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState([]);
  const [votes, setVotes] = useState(0);
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const { review_id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchReviewByID(review_id).then((res) => {
      setReview(res.data.review);
      setLoading(false);
    });
  }, [review_id]);

  const handleVote = (event, vote) => {
    const voteError = () => {
      alert("Error voting");
      setUpvote(false);
      setDownvote(false);
      setVotes(0);
    };

    if (event.target.className === "upvote") {
      setDownvote(false);
      setUpvote(true);
    } else {
      setDownvote(true);
      setUpvote(false);
    }
    setVotes(votes + vote);
    patchReview(review_id, vote)
      .then((res) => {
        if (res.status !== 201) {
          voteError();
        }
      })
      .catch((err) => {
        voteError();
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
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
          <p className="reviewMeta">
            {" "}
            Posted: {`${dayjs(review.created_at)}`}{" "}
          </p>
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
              disabled={upvote}
              onClick={(event) => {
                handleVote(event, 1);
              }}
            >
              <span className="material-symbols-outlined">thumb_up</span>
            </button>
            <button
              className="downvote"
              disabled={downvote}
              onClick={(event) => {
                handleVote(event, -1);
              }}
            >
              <span className="material-symbols-outlined">thumb_down</span>
            </button>
          </div>
        </div>
      </div>
      <Comments review_id={review_id} />
    </>
  );
};

export default Review;
