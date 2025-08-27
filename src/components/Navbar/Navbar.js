import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import styles from './Navbar.module.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/user-login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Helper to check if link is active for styling
  const isActive = (path) => location.pathname === path ? styles.active : '';

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main Navigation">
      <div className={styles.logo}>Office Work Tracker</div>

      <button
        className={styles.hamburger}
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label="Menu"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <ul
        className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}
        id="primary-navigation"
      >
        <li>
          <Link to="/dashboard" className={isActive('/dashboard')} onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
        </li>
        {/* Add more links here as needed */}
      </ul>

      {user && (
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
