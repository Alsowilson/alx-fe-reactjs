import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the Advanced Routing Demo.</p>
    <Link to="/profile">Go to Profile</Link>
  </div>
);

export default Home;
