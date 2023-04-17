import React, { useId, useEffect } from "react";
import { genres } from "../../data/genres";
import "./MovieItem.css";
import { Button, Col } from "react-bootstrap";

// const props = {
//   movie: {
//     rating: 7,
//   },
//   title: "abc",
// };

// const {movie} = props;

export const MovieItem = ({ movie }) => {
  const componentId = useId();


  // // 2 parameters, 1. function to call, 2. dependency array
  // useEffect(()=> {
  //   alert("component has been mounted")
  // }, [])




  const getGenreNameById = (id) => {
    // find single genre from the array on the basis of id
    // and return its name
    const genre = genres.find((g) => g.id === id);
    return genre.name;
  };

  return (
    <Col md={3} key={componentId}>
      <div className="movie-item shadow mb-5 bg-body-tertiary rounded">
        <div className="movie-item-thumbnail">
          <img src={movie.thumbnail} className="img-fluid" alt="movie 1" />
          <div className="movie-item-overlay">
            <b>Imdb: {movie.rating}/10</b>
            <div>
              <span className="fa fa-star text-warning checked"></span>
              <span className="fa fa-star text-warning checked"></span>
              <span className="fa fa-star text-warning checked"></span>
              <span className="fa fa-star text-warning checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <a href={`movie-details.html?id=${movie.id}`}>
              <Button variant="outline-warning" size="sm" className="mt-2">
                View Details
              </Button>
            </a>
          </div>
        </div>

        <div className="basic-info">
          <h6 className="mt-2">{movie.title}</h6>
          <div className="bottom">
            <small>
              <span>{movie.releaseYear}</span>
              <span>|</span>
              <span>{movie.duration || 0} min</span>
            </small>
            <span className="badge text-bg-dark">
              {getGenreNameById(movie.id)}
            </span>
          </div>
        </div>
        <br />
      </div>
    </Col>
  );
};
