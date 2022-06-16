import { useEffect, useState } from "react";
import { fetchCategories } from "./Api";
import { Link } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([]);
  const sortBy = ["created_at", "votes", "comment_count"];

  useEffect(() => {
    fetchCategories().then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <div className="navbar-container">
      <ul className="dropdown">
        <li>
          <i class="fa-solid fa-magnifying-glass"></i> Search
          <ul>
            <li>
              Sort by
              <ul>
                {sortBy.map((sort) => {
                  return(
                    <Link to={`/reviews/sort_by/${sort}`}><li>{`${sort.replace(/_/g, " ")}`}</li></Link>
                  )
                })}
              </ul>
            </li>
            <li>
              Categories
              <ul>
                {categories.map((category) => {
                  return (
                    <Link
                      to={`/category/${category.slug}`}
                      key={`${category.slug}`}
                    >
                      <li>{`${category.slug.replace(/-/g, " ")}`}</li>
                    </Link>
                  );
                })}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
