import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // ✅ Simulate authentication logic
  const isAuthenticated = true; // change to false to test redirect

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // ✅ Must explicitly render children to show it's a wrapper
  return children;
}

export default ProtectedRoute;
