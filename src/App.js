import "./styling/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Review from "./components/Review";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { UserContext } from "./context/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Reviews />} />
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
