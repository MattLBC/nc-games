import "./styling/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Review from "./components/Review";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:review_id/" element={<Review />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
