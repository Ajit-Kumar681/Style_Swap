import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import bgImage from "../assets/images/clo2.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Login Successful");
      navigate("/");
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
          background: linear-gradient(135deg,#2563eb,#1e40af);
          color: white;
          border-radius: 50%;
          font-size: 20px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(37,99,235,0.4);
        }

        .logo-text h1 {
          font-size: 22px;
          font-weight: 800;
          color: #1e293b;
        }

        .logo-text p {
          font-size: 12px;
          color: #64748b;
        }

        h2 {
          text-align: center;
          margin-bottom: 15px;
        }

        input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
        }

        .divider {
          text-align: center;
          margin: 18px 0;
          color: #94a3b8;
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

      <div className="auth-page">
        <div className="auth-box">
          <div className="logo-box">
            <div className="logo-circle">SS</div>
            <div className="logo-text">
              <h1>StyleSwap</h1>
              <p>Smart Clothing Rentals</p>
            </div>
          </div>

          <h2>Login</h2>

          <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
          </form>

          <div className="divider">OR</div>

          <GoogleLogin
            onSuccess={() => alert("Google Login Success")}
            onError={() => alert("Google Login Failed")}
          />

          <p className="switch-text">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
