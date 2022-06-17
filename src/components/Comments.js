import { useEffect, useState } from "react";
import { getComments } from "./Api";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getComments(review_id).then((res) => {
      setComments(res.data.comments);
    });
  }, [comments, review_id]);

  if (!comments) {
    return (
      <div className="commentsContainer">
        <div className="commentBanner">
          <h1 className="commentTitle">Comments</h1>
          <button className="addComment">Add Comment</button>
        </div>
        <div className="commentCard">
          <p className="commentBody">Be the first to comment!</p>
        </div>
        <CommentForm review_id={review_id} />
      </div>
    );
  }

  return (
    <div className="commentsContainer">
      <div className="commentBanner">
        <h1 className="commentTitle">Comments</h1>
        <button
          className="addComment"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Add Comment
        </button>
      </div>
      {showForm ? <CommentForm review_id={review_id} /> : null}
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
