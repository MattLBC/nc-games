import { Link } from "react-router-dom";
import logo from "../assets/BoardDom(5).png";
import { useContext } from "react";
import { UserContext } from "../context/User";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="headerLogo" src={logo} alt="logo"></img>
      </Link>
    </div>
  );
};

export default Header;
