import React, { useState } from "react";
import { allMovies } from "../data/movies";
import Title from "./Title";

export const MoviesList = () => {
  //PASCAL
  //   const [movies, setMovies] = useState([1, 232, 23]);

  // CONDITIONAL RENDERING

  //   if (movies.length === 0) {
  //     return <i>No Movies Found...</i>;
  //   } else {
  //     return <h1>Here is the movies list: 1,2,3,23,2,</h1>;
  //   }

  return (
    <React.Fragment>
      <Title text="All Movies ----" date="11/11/123" />
      <div className="movie-wrapper">
        {allMovies
          .sort((a, b) => a.title.localeCompare(b))
          .map((movie) => {
            return (
              <div className="movie-item">
                <h4>{movie.title}</h4>
                <p>{movie.director}</p>
                <p>Rating: {movie.rating}</p>
                <button>View Details</button>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};
