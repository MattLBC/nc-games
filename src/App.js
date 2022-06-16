import "./styling/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Review from "./components/Review";
import NotFound from "./components/errors/NotFound";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import { UserContext } from "./context/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Reviews />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/review/:review_id" element={<Review />} />
            <Route path="/category/:category" element={<Reviews />} />
            <Route path="/reviews/sort_by/:sort" element={<Reviews />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
