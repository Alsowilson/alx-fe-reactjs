import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/dashboard">Go to Dashboard</Link> <br />
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
}

export default Home;
