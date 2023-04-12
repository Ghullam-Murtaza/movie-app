import { useState } from "react";

export const MoviesList = () => {
  const [movies, setMovies] = useState([1, 232, 23]);

  //   if (movies.length === 0) {
  //     return <i>No Movies Found...</i>;
  //   } else {
  //     return <h1>Here is the movies list: 1,2,3,23,2,</h1>;
  //   }

  return movies.length === 0 ? (
    <i>No Movies Found...</i>
  ) : (
    <h1>Here is the movies list: 1,2,3,23,2,</h1>
  );
};
