import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryAdd from "./ADD/StoryAdd";
import Home from "./Home";
import Detail from "./Detail/detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path={"/StoryAdd"} element={<StoryAdd />} />
        <Route path={"/Detail/:id"} element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
