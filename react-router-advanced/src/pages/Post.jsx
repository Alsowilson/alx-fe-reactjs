import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Dynamic Post Page</h2>
      <p>You are viewing post #{id}</p>
    </div>
  );
};

export default Post;
