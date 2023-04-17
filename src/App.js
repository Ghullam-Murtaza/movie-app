import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AppNavbar } from "./components/AppNavbar/AppNavbar";
import { Hero } from "./components/Hero/Hero";
import { LatestMovies } from "./sections/LatestMovies/LatestMovies";
import { PostsList } from "./components/PostsList/PostsList";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LatestMovies />,
  },
  {
    path: "/movies",
    element: <LatestMovies />,
  },
  {
    path: "/posts",
    element: <PostsList />,
  },
]);

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <RouterProvider router={router} />
      <h1>FOOTER</h1>
    </React.Fragment>
  );
}

export default App;
