import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="profile">Go to Profile</Link>
      <Outlet /> {/* Nested route content renders here */}
    </div>
  );
}

export default Dashboard;
