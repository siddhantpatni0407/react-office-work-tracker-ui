import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import styles from './TaskDetails.module.css';

function TaskRow({ task, onToggle, onDelete }) {
  return (
    <tr className={task.completed ? styles.completedRow : ''}>
      <td>{task.text}</td>
      <td>{task.completed ? 'Completed' : 'Pending'}</td>
      <td>{task.sprint}</td>
      <td>{task.team}</td>
      <td>{task.startDate}</td>
      <td>{task.endDate}</td>
      <td>{task.remark}</td>
      <td>
        <button className={styles.actionBtn} onClick={() => onToggle(task.id)}>
          {task.completed ? 'Mark Pending' : 'Mark Complete'}
        </button>
        <button className={`${styles.actionBtn} ${styles.deleteBtn}`} onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

function TaskDetails() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Complete project report',
      completed: false,
      sprint: 'Sprint 1',
      team: 'Team A',
      startDate: '2025-08-01',
      endDate: '2025-08-05',
      remark: 'Urgent',
    },
    {
      id: 2,
      text: 'Attend team meeting',
      completed: true,
      sprint: 'Sprint 1',
      team: 'Team B',
      startDate: '2025-08-02',
      endDate: '2025-08-02',
      remark: '',
    },
    {
      id: 3,
      text: 'Review code submissions',
      completed: false,
      sprint: 'Sprint 2',
      team: 'Team A',
      startDate: '2025-08-06',
      endDate: '2025-08-10',
      remark: 'Important',
    },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const goBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className={styles.appContainer}>
      <Navbar />
      <Header title="Task Details" />

      <main className={styles.mainContent}>
        <button onClick={goBack} className={styles.backButton} aria-label="Go back to dashboard">
          ← Back to Dashboard
        </button>

        {tasks.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No tasks available. Start by adding a new task!</p>
          </div>
        ) : (
          <div className={styles.tableContainer}>
            <table className={styles.taskTable} aria-label="Task details table">
              <thead>
                <tr>
                  <th>Task Details</th>
                  <th>Status</th>
                  <th>Sprint Number</th>
                  <th>Team</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Remark</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => (
                  <TaskRow
                    key={task.id}
                    task={task}
                    onToggle={toggleTaskCompletion}
                    onDelete={deleteTask}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default TaskDetails;
