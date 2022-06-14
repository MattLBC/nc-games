import { useEffect, useState } from "react";
import { fetchCategories } from "./Api";
import { Link } from "react-router-dom";


const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <div className="navbar-container">
      <div className="dropdown">
        <span className="catMenu">Categories</span>
        <div className="dropdown-content">
          {categories.map((category) => {
            return (
              <Link to={`/category/${category.slug}`} key={`${category.slug}`}>
                <p>{`${category.slug}`}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <h1><span className="material-symbols-outlined">
search
</span></h1>
    </div>
  );
};

export default Nav;
