
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AppNavbar } from "./components/AppNavbar/AppNavbar";
import { Hero } from "./components/Hero/Hero";
import { LatestMovies } from "./sections/LatestMovies/LatestMovies";
import { PostsList } from "./components/PostsList/PostsList";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [username, setUsername] = useState(0);
  const [phone, setPhone] = useState("");

  // 2 parameters, 1. function to call, 2. dependency array
  // useEffect(() => {
  //   alert("component has been mounted");

  //   if (username === 3) {
  //     alert("the current value is 3");
  //   }
  //   console.log('useeffect called', username, phone);
  // }, [username, phone]);

  // didMount

  const handleInputChange = (event) => {
    // const num1 = Number(event.target.value)
    // const num2 = parseInt(event.target.value, 10)

    // console.log(typeof event.target.value);

    setUsername(Number(event.target.value));
  };

  return (
    <React.Fragment>
      <RouterProvider router={router} />

      {/* 
    
    CONTROLLED COMPONENTS
    UNCONTROLLED COMPONENTS

    */}

      {/* <input
        type="number"
        id="username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        id="telephone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      /> */}
      <AppNavbar />
      <Hero />
      <LatestMovies />

      {/* <PostsList /> */}
    </React.Fragment>
  );
}

export default App;
