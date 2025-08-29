import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import PrivateRoute from "./auth/PrivateRoute";

// Lazy loaded components
const AdminLogin = lazy(() => import("./components/AdminLogin/AdminLogin"));
const UserLogin = lazy(() => import("./components/UserLogin/UserLogin"));
const Signup = lazy(() => import("./components/Signup/Signup")); // ✅ New unified Signup
const AuthOptionPage = lazy(() =>
  import("./pages/AuthOptionPage/AuthOptionPage")
);
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const TaskDetails = lazy(() =>
  import("./components/TaskTrackerCard/TaskDetails/TaskDetails")
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            {/* Option Page */}
            <Route path="/auth" element={<AuthOptionPage />} />

            {/* Auth Routes */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/signup" element={<Signup />} /> {/* ✅ One signup */}

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/tasks"
              element={
                <PrivateRoute>
                  <TaskDetails />
                </PrivateRoute>
              }
            />

            {/* Default Redirect */}
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
