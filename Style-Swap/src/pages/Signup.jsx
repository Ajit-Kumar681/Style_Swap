import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import bgImage from "../assets/images/clo2.jpg";

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
      alert("Fill all fields");
    }
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        .auth-page {
          min-height: 100vh;
          background:
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(${bgImage}) center/cover no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .auth-box {
          width: 380px;
          background: rgba(255,255,255,0.95);
          padding: 30px;
          border-radius: 18px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        /* LOGO */
        .logo-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 25px;
        }

        .logo-circle {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg,#16a34a,#15803d);
          color: white;
          border-radius: 50%;
          font-size: 20px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(14, 26, 187, 0.4);
        }

        .logo-text h1 {
          font-size: 22px;
          font-weight: 800;
          color: #1e293b;
          line-height: 1;
        }

        .logo-text p {
          font-size: 12px;
          color: #64748b;
          margin-top: 4px;
        }

        h2 {
          text-align: center;
          margin-bottom: 15px;
          color: #1e293b;
        }

        input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          font-size: 14px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #16a34a;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
          font-weight: 600;
        }

        button:hover {
          background: #15803d;
        }

        .divider {
          text-align: center;
          margin: 18px 0;
          color: #94a3b8;
          font-size: 14px;
        }

        .switch-text {
          text-align: center;
          margin-top: 15px;
          font-size: 14px;
          color: #475569;
        }

        .switch-text span {
          color: #2563eb;
          cursor: pointer;
          font-weight: 600;
        }
      `}</style>

      <div className="auth-page">
        <div className="auth-box">
          {/* LOGO */}
          <div className="logo-box">
            <div className="logo-circle">SS</div>
            <div className="logo-text">
              <h1>StyleSwap</h1>
              <p>Create your account</p>
            </div>
          </div>

          <h2>Sign Up</h2>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Sign Up</button>
          </form>

          <div className="divider">OR</div>

          <GoogleLogin
            onSuccess={() => alert("Google Signup Success")}
            onError={() => alert("Google Signup Failed")}
          />

          <p className="switch-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
