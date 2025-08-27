import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TaskTrackerCard.module.css';

function TaskTrackerCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tasks');  // Navigate to the task details page route
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={handleClick}
      style={{ cursor: 'pointer' }}
      className={styles.header}
    >
      <h3>Task Tracker</h3>
      <p>Click to view task details →</p>
    </div>
  );
}

export default TaskTrackerCard;
