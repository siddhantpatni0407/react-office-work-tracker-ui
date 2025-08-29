import React, { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import TaskTrackerCard from "../../components/TaskTrackerCard/TaskTrackerCard";
import OfficeVisitTrackerCard from "../../components/OfficeVisitTrackerCard/OfficeVisitTrackerCard";
import LeavePlannerCard from "../../components/LeavePlannerCard/LeavePlannerCard";

import styles from "./Dashboard.module.css";

function Dashboard() {
  const { user, logout } = useAuth();  // user object contains { role: "ADMIN" | "USER" }
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState("all");

  const handleLogout = () => {
    logout();
    navigate("/user-login");
  };

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className={styles.appContainer}>
      <Navbar onSelectCard={handleCardSelect} />

      <Header title={`Dashboard (${user?.role})`} />

      <main className={styles.mainContent}>
        <div className={styles.logoutContainer}>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>

        {/* Role-based UI */}
        {user?.role === "ADMIN" ? (
          <section className={styles.adminSection}>
            <h2>👨‍💼 Admin Controls</h2>
            <button
              className="btn btn-primary m-2"
              onClick={() => navigate("/admin-signup")}
            >
              Create New Admin
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => navigate("/user-signup")}
            >
              Create New User
            </button>
          </section>
        ) : null}

        <section className={styles.cardsContainer}>
          {(selectedCard === "all" || selectedCard === "task") && (
            <TaskTrackerCard />
          )}
          {(selectedCard === "all" || selectedCard === "officeVisit") && (
            <OfficeVisitTrackerCard />
          )}
          {(selectedCard === "all" || selectedCard === "leavePlanner") && (
            <LeavePlannerCard />
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;
