import { useEffect, useState } from "react";
import { getComments } from "./Api";
import Loading from "./Loading";
import dayjs from "dayjs";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((res) => {
      setComments(res.data.comments);
    });
  }, []);

  return (
    <div className="commentsContainer">
      <div className="commentBanner">
        <h1 className="commentTitle">Comments</h1>
        <button className="addComment">Add Comment</button>
      </div>
      {comments.map((comment) => {
        return (
          <div className="commentCard" key={comment.comment_id}>
            <h3 className="commentUser">{comment.author}</h3>
            <p className="commentBody">{comment.body}</p>
            <p className="posted"> {`Posted: ${dayjs(comment.created_at)}`}</p>
            <div className="voteContainer">
              <button className="upvote">
                <span className="material-symbols-outlined">thumb_up</span>
              </button>
              <p className="commentVotes">
                <span className="material-symbols-outlined">grade</span>{" "}
                {comment.votes}
              </p>
              <button className="downvote">
                <span className="material-symbols-outlined">thumb_down</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
