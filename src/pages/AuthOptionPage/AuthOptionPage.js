import React from "react";
import { useNavigate } from "react-router-dom";
import "./AuthOptionPage.css";
import { FaUser, FaUserPlus, FaLock } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function AuthOptionPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-option-page">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header title="Welcome to Office Work Tracker" />

      <main className="auth-option-container">
        <div className="auth-card">
          <p className="auth-subtitle">Choose your option to continue</p>

          <div className="auth-sections">
            {/* Admin Section */}
            <div className="auth-section">
              <h2 className="section-title">Admin</h2>
              <div className="auth-grid">
                <div
                  className="auth-box admin-login"
                  onClick={() => navigate("/admin-login")}
                >
                  <FaLock className="auth-icon" />
                  <h3>Admin Login</h3>
                  <p>Login as administrator to manage users and data</p>
                </div>
              </div>
            </div>

            {/* User Section */}
            <div className="auth-section">
              <h2 className="section-title">User</h2>
              <div className="auth-grid">
                <div
                  className="auth-box user-login"
                  onClick={() => navigate("/user-login")}
                >
                  <FaUser className="auth-icon" />
                  <h3>User Login</h3>
                  <p>Access your tasks and office work dashboard</p>
                </div>

                <div
                  className="auth-box signup"
                  onClick={() => navigate("/signup")}
                >
                  <FaUserPlus className="auth-icon" />
                  <h3>Signup</h3>
                  <p>Create a new account (choose Admin/User in form)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AuthOptionPage;
