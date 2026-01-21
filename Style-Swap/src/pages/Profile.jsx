import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo2.png"; // replace with your logo path

const Profile = ({ setUser }) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user"));
    if (saved) setForm(saved);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    localStorage.setItem("user", JSON.stringify(form));
    setUser(form);
    alert("Profile Updated Successfully!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoWrapper}>
          <img src={logo} alt="Profile Logo" style={styles.logo} />
        </div>

        <h2 style={styles.heading}>Edit Profile</h2>

        <div style={styles.form}>
          <input
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="Full Name"
            style={styles.input}
          />
          <input
            name="email"
            type="email"
            value={form.email || ""}
            onChange={handleChange}
            placeholder="Email Address"
            style={styles.input}
          />
          <input
            name="password"
            type="password"
            value={form.password || ""}
            onChange={handleChange}
            placeholder="Password"
            style={styles.input}
          />

          <button
            onClick={saveProfile}
            style={styles.button}
            onMouseOver={(e) => (e.target.style.background = "#1e40af")}
            onMouseOut={(e) => (e.target.style.background = "#2563eb")}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 70px)",
    background: "#d1d5db", // industrial gray
    padding: "30px",
  },
  card: {
    background: "#f8fafc",
    padding: "50px 30px 30px 30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoWrapper: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: "20px",
    border: "3px solid #2563eb",
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heading: {
    marginBottom: "30px",
    color: "#111",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "500",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    outline: "none",
    background: "#e5e7eb",
    transition: "0.2s",
  },
  button: {
    padding: "12px 0",
    borderRadius: "8px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Profile;
