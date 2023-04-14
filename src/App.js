import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { AppNavbar } from "./components/AppNavbar/AppNavbar";
import { Hero } from "./components/Hero/Hero";
import { LatestMovies } from "./sections/LatestMovies/LatestMovies";

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <Hero />
      <LatestMovies />
    </React.Fragment>
  );
}

export default App;
