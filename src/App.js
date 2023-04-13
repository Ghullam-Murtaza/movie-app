import React from "react";
import "./App.css";
import Title from "./components/Title";
import { Counter } from "./components/Counter";
import { MoviesList } from "./components/MoviesList";
import { Button } from "./components/Button";

function App() {
  return (
    <React.Fragment>
      <Button title="App Button" handleButtonClick={()=> alert('clicked')} />
      <Title text="MERN DEV Course" date="11/11/2023"  />
      {/* {
        text: "MERN DEV Course",
        date: "11/11/12",
        
      } */}
      <Counter />
      <hr />
      <MoviesList />
    </React.Fragment>
  );
}

export default App;
