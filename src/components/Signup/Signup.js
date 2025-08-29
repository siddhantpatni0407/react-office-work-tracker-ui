import React, { useState } from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  const [role, setRole] = useState("user"); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", { ...formData, role });
    alert(`Signed up as ${role}`);
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupTitle}>✨ Create Account</h2>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        
        <div className={styles.formGroup}>
          <label>Role</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className={styles.inputField}
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>

        <button type="submit" className={styles.signupBtn}>
          🚀 Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
