import { Link } from "react-router-dom";
import logo from "../assets/BoardDom(5).png";

const Header = () => {
  return (
    <Link to="/">
      <div className="header">
        <img className="headerLogo" src={logo} alt="logo"></img>
      </div>
    </Link>
  );
};

export default Header;
