import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/clo1.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        .home-container {
          min-height: 100vh;
          background: linear-gradient(
              rgba(0, 0, 0, 0.55),
              rgba(0, 0, 0, 0.55)
            ),
            url(${bgImage}) center/cover no-repeat;
          color: #fff;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-circle {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #2563eb, #1e40af);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .nav-logo h2 {
          font-size: 22px;
          font-weight: 800;
        }

        .nav-links button {
          margin-left: 15px;
          padding: 10px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }

        .login-btn {
          background: transparent;
          color: #fff;
          border: 1px solid #fff;
        }

        .signup-btn {
          background: #2563eb;
          color: #fff;
        }

        /* HERO SECTION */
        .hero {
          height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          padding: 0 60px;
        }

        .hero-content {
          max-width: 520px;
        }

        .hero-content h1 {
          font-size: 48px;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 18px;
          color: #e5e7eb;
          margin-bottom: 30px;
        }

        .hero-content button {
          padding: 14px 30px;
          background: #16a34a;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
          font-weight: 600;
        }

        .hero-content button:hover {
          background: #15803d;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .navbar {
            padding: 20px;
          }

          .hero {
            padding: 20px;
            text-align: center;
          }

          .hero-content h1 {
            font-size: 36px;
          }
        }
      `}</style>

      <div className="home-container">
        {/* NAVBAR */}
        <div className="navbar">
          <div className="nav-logo">
            <div className="logo-circle">SS</div>
            <h2>StyleSwap</h2>
          </div>

          <div className="nav-links">
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="signup-btn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
        </div>

        {/* HERO */}
        <div className="hero">
          <div className="hero-content">
            <h1>Rent Fashion.  
              <br />Save Money.  
              <br />Look Premium.</h1>

            <p>
              StyleSwap lets you rent premium fashion outfits for every
              occasion. Affordable, sustainable and stylish.
            </p>

            <button onClick={() => navigate("/signup")}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
