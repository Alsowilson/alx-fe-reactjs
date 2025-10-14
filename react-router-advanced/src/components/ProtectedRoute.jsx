import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // simulate a logged-in user
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
