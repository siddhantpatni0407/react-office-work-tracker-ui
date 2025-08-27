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
  const { logout } = useAuth();
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

      <Header title="Dashboard" />

      <main className={styles.mainContent}>
        <div className={styles.logoutContainer}>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>

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
