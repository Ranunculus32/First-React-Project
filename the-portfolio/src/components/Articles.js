import React from "react";
import "../styles/articles.css";

const Article = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>Author: {props.author}</p>
    </div>
  );
};

export default Article;
