import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/images/clo1.jpg";

const Home = () => {
  return (
    <>
      <Navbar />

      <style>{`
        .home {
          min-height: 100vh;
          background:
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(${bgImage}) center/cover no-repeat;
          padding-top: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero {
          color: white;
          text-align: center;
          max-width: 700px;
          padding: 20px;
        }

        .hero h1 {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .hero p {
          font-size: 18px;
          margin-bottom: 25px;
        }

        .hero button {
          padding: 12px 26px;
          border-radius: 8px;
          border: none;
          background: #2563eb;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 34px;
          }

          .hero p {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="home">
        <div className="hero">
          <h1>Rent. Swap. Repeat.</h1>
          <p>
            Sustainable fashion platform to rent and exchange
            clothes easily.
          </p>
          <button>Explore Now</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
