import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link>
      </nav>

      {/* ✅ Nested route outlet */}
      <Outlet />
    </div>
  );
}

export default Dashboard;

