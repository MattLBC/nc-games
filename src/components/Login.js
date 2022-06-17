import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/User";
import { Link } from "react-router-dom";
import { getUsers } from "./Api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);
  const [invalidUser, setInvalidUser] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((res) => {
      setUserList(res.data.users);
    });
  }, []);

  const handleSubmit = (event) => {
    setInvalidUser(false);
    event.preventDefault();
    if (userList.find((user) => user.username === username) === undefined) {
      setInvalidUser(true);
    } else {
      setUser(userList.find((user) => user.username === username));
      setTimeout(() => {
        window.location.replace("/");
      }, 1500);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  if (user.username) {
    return (
      <div className="loginContainer">
        <h2>Logged in as {user.username}</h2>
        <br></br>
        <h3>Real name: {user.name}</h3>
        <br></br>
        <img className="userIcon" src={`${user.avatar_url}`} />
        <br></br>
        <button
          onClick={() => {
            setUser({});
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <h3>Please enter your username</h3>
        <input
          type="text"
          name="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br></br>
        {invalidUser ? <h3>Invalid username, please try again</h3> : null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
