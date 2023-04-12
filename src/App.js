import React from "react";
import "./App.css";
import Title from "./components/Title";
import { Counter } from "./components/Counter";
import { MoviesList } from "./components/MoviesList";

function App() {
  return (
    <React.Fragment>
      <Title />
      <Counter />
      <hr />
      <MoviesList />
    </React.Fragment>
  );
}

export default App;
