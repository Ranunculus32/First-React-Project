import React from "react";
import Article from "../components/Articles";

const BlogPage = () => {
  return (
    <div>
      <Article
        title="Article Title"
        content="Article content goes here."
        author="John Doe"
      />
    </div>
  );
};
export default BlogPage;
