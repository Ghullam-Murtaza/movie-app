import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { PostItem } from "../PostItem/PostItem";
import { Link } from "react-router-dom";

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("1 - before api call");

    getPosts();

    console.log("3- function end");
  }, []);

  //   const getPosts = () => {
  //     console.log("1 - before api call");

  //     axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //       console.log("2- after api success");
  //       setPosts(response.data);
  //     });

  //     console.log("3- function end");
  //   };

  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("2- after api success");

    setPosts(response.data);
  };

  return (
    <div>
      <Link style={{
          textDecoration: 'none',
          color: 'black',
          border: '1px solid orangered',
          borderRadius: '6px',
          padding: '12px',
          display: 'block',
          margin: '20px 0',
          width: '150px'
      }} to={"/movies"}>Go to Movies LIST</Link>

      {posts.map((post, index) => {
        return <PostItem data={post} />;
      })}
    </div>
  );
};
