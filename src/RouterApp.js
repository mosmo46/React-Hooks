import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Users from "./components/Users/Users";
import Home from "./components/Home/Home";
import FetchingData from "./components/FetchingData/FetchingData"
import Register from "./components/Register/Register"
export default function RouterApp() {
  return (
    // <Router>
    <div>
      <Routes>
        <Route exs path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="fetching-data" element={<FetchingData />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
      // </Router>
  );
}
