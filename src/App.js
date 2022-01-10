import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import RouterApp from "./RouterApp";

function App() {
  return (
    <Router>

    <div className="App">
      <NavBar />
      <RouterApp />
    </div>
    </Router>
  );
}

export default App;
