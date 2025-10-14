import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/dashboard">Dashboard</Link> <br />
      <Link to="/profile">Profile</Link> <br />
      <Link to="/users/101">User 101</Link>
    </div>
  );
}

export default Home;
