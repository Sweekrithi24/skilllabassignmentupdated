import React from "react";
import Navbar from "./components/Navbar.js";
import MovieList from "./components/MovieList";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <MovieList />
      </div>
    </div>
  );
};

export default App;
