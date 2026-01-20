import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        /* ===== NAVBAR ===== */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          height: 70px;
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          z-index: 1000;
        }

        /* ===== LOGO ===== */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-weight: 800;
          font-size: 20px;
          cursor: pointer;
          letter-spacing: 0.5px;
        }

        .nav-circle {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg,#2563eb,#1e40af);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          box-shadow: 0 8px 20px rgba(37,99,235,0.45);
        }

        /* ===== LINKS ===== */
        .nav-links {
          display: flex;
          gap: 32px;
          font-size: 15px;
        }

        .nav-links span {
          color: #cbd5f5;
          cursor: pointer;
          position: relative;
          padding-bottom: 4px;
          transition: 0.3s;
        }

        .nav-links span:hover {
          color: white;
        }

        .nav-links .active {
          color: white;
        }

        .nav-links .active::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #60a5fa;
          border-radius: 2px;
        }

        /* ===== AUTH BUTTONS ===== */
        .auth-buttons {
          display: flex;
          gap: 14px;
        }

        .login-btn {
          background: transparent;
          border: 1px solid #60a5fa;
          color: #60a5fa;
          padding: 8px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .login-btn:hover {
          background: rgba(96,165,250,0.15);
        }

        .signup-btn {
          background: #2563eb;
          border: none;
          color: white;
          padding: 8px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          box-shadow: 0 8px 20px rgba(37,99,235,0.4);
          transition: 0.3s;
        }

        .signup-btn:hover {
          background: #1e40af;
        }

        /* ===== HAMBURGER ===== */
        .menu {
          display: none;
          font-size: 30px;
          color: white;
          cursor: pointer;
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(2,6,23,0.95);
            flex-direction: column;
            align-items: center;
            gap: 22px;
            padding: 25px 0;
            transform: translateY(${open ? "0" : "-20px"});
            opacity: ${open ? "1" : "0"};
            pointer-events: ${open ? "auto" : "none"};
            transition: 0.3s ease;
          }

          .auth-buttons {
            position: absolute;
            top: 260px;
            left: 0;
            width: 100%;
            justify-content: center;
            gap: 18px;
            padding-bottom: 25px;
            background: rgba(2,6,23,0.95);
            opacity: ${open ? "1" : "0"};
            pointer-events: ${open ? "auto" : "none"};
            transition: 0.3s ease;
          }

          .menu {
            display: block;
          }
        }
      `}</style>

      <div className="navbar">
        {/* LOGO */}
        <div className="nav-logo" onClick={() => navigate("/")}>
          <div className="nav-circle">SS</div>
          StyleSwap
        </div>

        {/* LINKS */}
        <div className="nav-links">
          <span
            className={isActive("/") ? "active" : ""}
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span>Browse</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        {/* AUTH */}
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="menu" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </>
  );
};

export default Navbar;
