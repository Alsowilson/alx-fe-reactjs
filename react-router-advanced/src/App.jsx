import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import UserDetails from "./components/UserDetails";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Home />} />

        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Nested + Dynamic route inside Profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route for users */}
        <Route path="/users/:id" element={<UserDetails />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

