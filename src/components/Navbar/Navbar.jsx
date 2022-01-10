import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const NavBar = () => (
  // <Router>

  <nav className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/fetching-data">FetchingData</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>

      
      
    </ul>
  </nav>
  // </Router>
);

export default NavBar;
