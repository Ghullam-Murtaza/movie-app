
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { allMovies } from "../../data/movies";
import { MovieItem } from "../../components/MovieItem/MovieItem";
import { Link } from "react-router-dom";

export const LatestMovies = () => {
  const [movies, setMovies] = useState([...allMovies]);

  const handleSortChange = (event) => {
    const { value } = event.target;
    const _moviesList = [...movies];

    switch (value) {
      case "name-asc":
        // to sort the strings in ascending order | for objects especially
        _moviesList.sort((first, second) =>
          first.title.localeCompare(second.title)
        );
        setMovies(_moviesList);
        break;

      case "name-desc":
        // to sort the strings in ascending order | for objects especially
        _moviesList.sort((first, second) =>
          second.title.localeCompare(first.title)
        );
        setMovies(_moviesList);
        break;

      case "rating":
        // to sort the strings in ascending order | for objects especially
        _moviesList.sort((first, second) => second.rating - first.rating);
        setMovies(_moviesList);
        break;

      default:
        break;
    }
  };

  const handleGenresChange = (event) => {
    const { value } = event.target;

    if (value === -1) {
      return;
    }

    const filteredMovies = allMovies.filter((m) => m.genre == value);
    setMovies(filteredMovies);
  };

  return (
    <Container className="movies-list-wrapper">
      <SectionTitle title="Latest Movies" />

    <Link to={'/posts'} >Go to POSTS LIST</Link>

      <div class="filters-wrapper py-4">
        <Row>
          <Col md={4}>
            <div class="d-flex">
              <select
                class="form-select"
                id="movies-sort"
                onChange={handleSortChange}
              >
                <option value="-1">Sort</option>
                <option value="name-asc">Name (A-Z) | Ascending</option>
                <option value="name-desc">Name (Z-A) | Descending</option>
                <option value="rating">Rating</option>
                <option>Year Released</option>
              </select>
            </div>
          </Col>
          <div class="col-md-4">
            <select
              class="form-select"
              id="genres-filter"
              onChange={handleGenresChange}
            >
              <option value="-1">Select Genre</option>
              <option value="2">Action</option>
              <option>Sci-Fi</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Crime Thriller</option>
              <option>Animated</option>
            </select>
          </div>
          <div class="col-md-4">
            <select class="form-select">
              <option>Select Industry</option>
              <option>Hollywood</option>
              <option>Bollywood</option>
              <option>English</option>
            </select>
          </div>
        </Row>
      </div>

      <Row>
        {/* {movies.map((movie, index) => {
          return <MovieItem movie={movie} key={`${movie.id}_${index}`} />;
        })} */}
        <MovieItem movie={movies[0]} key={`${movies[0].id}_${1}`} />;
      </Row>
    </Container>
  );
};
