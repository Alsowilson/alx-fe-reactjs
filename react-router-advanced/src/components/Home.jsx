import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/dashboard">Dashboard</Link> <br />
      <Link to="/profile">Profile</Link> <br />
      <Link to="/blog/1">Blog Post 1</Link> <br />
      <Link to="/blog/2">Blog Post 2</Link>
    </div>
  );
}

export default Home;
