import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import PrivateRoute from "./auth/PrivateRoute";

import AdminLogin from "./components/AdminLogin/AdminLogin";
import UserLogin from "./components/UserLogin/UserLogin";
import Signup from "./components/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import TaskDetails from "./components/TaskTrackerCard/TaskDetails/TaskDetails";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/signup" element={<Signup />} />
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
          <Route path="*" element={<Navigate to="/user-login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
