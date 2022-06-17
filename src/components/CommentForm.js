import { useEffect, useState, useContext } from "react";
import { postComment } from "./Api";
import { UserContext } from "../context/User";
import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";

const CommentForm = ({ review_id }) => {
  const [commentBody, setCommentBody] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newComment, setNewComment] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    setCommentAuthor(user.username);
  }, [user]);




  const handleSumbit = (event) => {
    event.preventDefault();
    postComment(review_id, commentAuthor, commentBody).then((res) => {
      setNewComment(res.data);
      setIsSubmitted(true);
    });
  };

  if (commentAuthor === undefined) {
    return (
      <div>
        <h2>
          Please{" "}
          <Link to="/login" className="loginLink">
            login
          </Link>{" "}
          to comment
        </h2>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="newComment">
        <h2>Comment Submitted!</h2>
        <CommentCard comment={newComment} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSumbit}>
      <br></br>
      <h3 className="commentUser">Comment as {user.username}</h3>
      <label>
        <textarea
          placeholder="Comment here!"
          id="commentBodyInput"
          maxLength={400}
          required
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
        ></textarea>
      </label>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
