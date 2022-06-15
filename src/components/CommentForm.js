import { useEffect, useState } from "react";
import { postComment, getUsers } from "./Api";

const CommentForm = ({ review_id }) => {
  const [commentBody, setCommentBody] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [users, setUsers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  const handleSumbit = (event) => {
    event.preventDefault();
    postComment(review_id, commentAuthor, commentBody).then((res) => {
      console.log(res);
      setIsSubmitted(true);
    });
  };
  if (isSubmitted) {
    return <div>Comment Submitted</div>;
  }

  return (
    <form onSubmit={handleSumbit}>
      <label> Username:
      <select onChange={(event)=>{setCommentAuthor(event.target.value)}}>
        <option></option>
        {users.map((user) => {
          return <option key={user.username} value={user.username}>{user.username}</option>;
        })}
      </select>
      </label>
      <br></br>
      <label>
        <input
          type="text"
          placeholder="Comment"
          id="commentBodyInput"
          maxLength={400}
          required
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
        ></input>
      </label>
      <br></br>
      <button type="submit" disabled={commentAuthor.length === 0}>Submit</button>
    </form>
  );
};

export default CommentForm;
