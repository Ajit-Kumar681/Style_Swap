import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert("Signup Successful");
      navigate("/login");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <>
      <style>{`
        body {
          background: #f4f6f8;
        }
        .auth-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .auth-box {
          width: 360px;
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        .auth-box h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }
        .auth-box input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #ccc;
        }
        .auth-box button {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          background: #16a34a;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }
        .auth-box button:hover {
          background: #15803d;
        }
        .switch-text {
          text-align: center;
          margin-top: 15px;
          font-size: 14px;
        }
        .switch-text span {
          color: #2563eb;
          cursor: pointer;
          font-weight: 600;
        }
      `}</style>

      <div className="auth-container">
        <form className="auth-box" onSubmit={handleSignup}>
          <h2>Create Account</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>

          <p className="switch-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
