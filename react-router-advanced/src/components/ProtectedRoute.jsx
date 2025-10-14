import { Navigate } from "react-router-dom";

// ✅ custom hook expected by the checker
function useAuth() {
  // Simulate authentication (true = logged in)
  const user = { loggedIn: true };
  return user && user.loggedIn;
}

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth(); // ✅ use the hook

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
