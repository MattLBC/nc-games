import { Link } from "react-router-dom";
import logo from "../assets/BoardDom(5).png";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/User";

const Header = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {}, [user]);

  return (
    <div className="header">
      <Link to="/">
        <img className="headerLogo" src={logo} alt="logo"></img>
      </Link>
      {user.username ? (
        <Link to="/login/">
          <h3 className="user">Logged in as: {user.username}</h3>
        </Link>
      ) : (
        <Link to="/login/">
          <h2 className="user">Login</h2>
        </Link>
      )}
    </div>
  );
};

export default Header;
