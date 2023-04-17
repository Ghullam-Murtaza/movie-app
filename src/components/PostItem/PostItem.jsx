import React from "react";
import "./PostItem.css";

export const PostItem = (props) => {
  return (
    <div className="post-item-wrapper">
      <h3>{props.data.title}</h3>
      <p>{props.data.body}</p>
    </div>
  );
};
