import { useEffect, useState } from "react";
import { getComments, patchComments } from "./Api";
import dayjs from "dayjs";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    getComments(review_id).then((res) => {
      setComments(res.data.comments);
    });
  }, []);

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
      <CommentForm review_id={review_id}/>
      {comments.map((comment) => {
        return <CommentCard comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
