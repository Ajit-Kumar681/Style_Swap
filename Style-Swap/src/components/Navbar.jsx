import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        /* Navbar container fixed at top */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.nav-container {
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

/* Logo */
.logo-box {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.logo-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.logo-text h1 {
  font-size: 22px;
  font-weight: 800;
  color: #111827;
}

/* Nav links */
.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links span {
  font-weight: 600;
  position: relative;
  cursor: pointer;
  padding: 4px 0;
  transition: 0.3s;
}

.nav-links span::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: #2563eb;
  transition: 0.3s;
}

.nav-links span:hover::after {
  width: 100%;
}

/* Auth buttons */
.auth-buttons {
  display: flex;
  gap: 12px;
}

.login-btn, .signup-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  position: relative;
}

/* Industrial-style login button */
.login-btn {
  background: #e5e7eb;
  color: #111827;
  box-shadow: inset 0 0 0 2px #2563eb;
}

.login-btn:hover {
  background: #2563eb;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Industrial-style signup button */
.signup-btn {
  background: #2563eb;
  color: #fff;
  border: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.signup-btn:hover {
  background: #1e40af;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

/* Icon inside buttons */
.auth-icon {
  font-size: 16px;
  display: flex;
  align-items: center;
  color: inherit;
}

      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo-box" onClick={() => navigate("/")}>
            <div className="logo-circle">SS</div>
            <div className="logo-text">
              <h1>StyleSwap</h1>
            </div>
          </div>

          {/* Nav Links */}
          <div className="nav-links">
            <span onClick={() => navigate("/western")}>WESTERN</span>
            <span onClick={() => navigate("/ethnic")}>ETHNIC</span>
            <span onClick={() => navigate("/accessories")}>ACCESSORIES</span>
            <span onClick={() => navigate("/mens")}>MEN&apos;S COLLECTION</span>
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="login-btn" onClick={() => navigate("/login")}>
              <span className="auth-icon" /> Login
            </button>
            <button className="signup-btn" onClick={() => navigate("/signup")}>
              <span className="auth-icon" /> Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
