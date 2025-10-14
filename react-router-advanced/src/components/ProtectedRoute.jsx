import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // simulate logged-in user

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
