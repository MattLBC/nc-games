import dayjs from "dayjs";

const CommentCard = ({comment}) => {
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
};
export default CommentCard;
