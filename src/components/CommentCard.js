import dayjs from "dayjs";
import { deleteComment, patchComments } from "./Api";
import { useContext, useState } from "react";
import { UserContext } from "../context/User";
import Loading from "./Loading";

const CommentCard = ({ comment }) => {
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [votes, setVotes] = useState(0);
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const { user } = useContext(UserContext);

  const handleDelete = (event) => {
    setLoading(true);
    setDeleted(false);
    event.preventDefault();
    deleteComment(event.target.value).then((res) => {
      setDeleted(true);
      setLoading(false);
    });
  };

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
    patchComments(comment.comment_id, vote)
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

  if (deleted) {
    return (
      <div className="commentCard">
        <h2>Comment Deleted!</h2>
      </div>
    );
  }

  return (
    <div className="commentCard" key={comment.comment_id}>
      <h3 className="commentUser">{comment.author}</h3>
      <p className="commentBody">{comment.body}</p>
      <p className="posted"> {`Posted: ${dayjs(comment.created_at)}`}</p>
      <div className="voteContainer">
        <button
          className="upvote"
          disabled={upvote}
          onClick={(event) => {
            handleVote(event, 1);
          }}
        >
          <span className="material-symbols-outlined">thumb_up</span>
        </button>
        <p className="commentVotes">
          <span className="material-symbols-outlined">grade</span>{" "}
          {comment.votes}
        </p>
        <button
          className="downvote"
          className="downvote"
          disabled={downvote}
          onClick={(event) => {
            handleVote(event, -1);
          }}
        >
          <span className="material-symbols-outlined">thumb_down</span>
        </button>
      </div>
      {user.username === comment.author ? (
        <button
          className="deleteBtn"
          value={comment.comment_id}
          onClick={(event) => {
            handleDelete(event);
          }}
        >
          Delete Comment
        </button>
      ) : null}
    </div>
  );
};
export default CommentCard;
