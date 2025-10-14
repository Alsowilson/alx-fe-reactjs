import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // simulate logged-in user
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
