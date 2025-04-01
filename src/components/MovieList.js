import React from "react";
import MovieCard from "./MovieCard";
import movies from "../data/movies"; // Import movie data

const MovieList = () => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
