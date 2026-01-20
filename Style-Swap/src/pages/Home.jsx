import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Hero & Category Images
import heroBg from "../assets/images/img0.jpg";
import trending1 from "../assets/images/img1.jpg";
import trending2 from "../assets/images/img2.jpg";
import trending3 from "../assets/images/img3.jpg";
import trending4 from "../assets/images/img4.jpg";

import category1 from "../assets/images/img5.jpg";
import category2 from "../assets/images/img6.jpg";
import category3 from "../assets/images/img7.jpg";

// Customer Avatars
import user1 from "../assets/images/img9.jpg";
import user2 from "../assets/images/img10.jpg";

const Home = () => {
  return (
    <>
      <Navbar />

      <style>{`
        /* HERO SECTION */
        .hero {
          min-height: 90vh;
          background:
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url(${heroBg}) center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 70px;
          color: white;
        }

        .hero h1 {
          font-size: 52px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .hero p {
          font-size: 20px;
          margin-bottom: 30px;
          line-height: 1.5;
        }

        .hero button {
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          margin: 0 10px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .hero .btn-primary {
          background: #2563eb;
          color: white;
        }
        .hero .btn-primary:hover {
          background: #1e40af;
        }

        .hero .btn-secondary {
          background: transparent;
          border: 1px solid white;
          color: white;
        }
        .hero .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
        }

        /* TRENDING RENTALS */
        .trending {
          padding: 60px 30px;
          background: #f1f5f9;
        }
        .trending h2 {
          font-size: 32px;
          margin-bottom: 30px;
        }
        .trending-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .trending-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: 0.3s;
        }
        .trending-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        .trending-card .price {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 600;
        }
        .trending-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* HOW IT WORKS */
        .how-it-works {
          padding: 60px 30px;
          text-align: center;
        }
        .how-it-works h2 { font-size: 32px; margin-bottom: 40px; }
        .steps {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 25px;
        }
        .step {
          background: #2563eb;
          color: white;
          padding: 20px;
          border-radius: 12px;
          flex: 1 1 200px;
        }
        .step h3 { margin-bottom: 10px; }

        /* CATEGORIES */
        .categories {
          padding: 60px 30px;
        }
        .categories h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 40px;
        }
        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }
        .category-card {
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        .category-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        .category-card h3 {
          position: absolute;
          bottom: 12px;
          left: 12px;
          color: white;
          font-weight: 700;
          text-shadow: 0 2px 6px rgba(0,0,0,0.6);
        }

        /* CUSTOMER REVIEWS */
        .reviews {
          padding: 60px 30px;
          background: #f1f5f9;
          text-align: center;
        }
        .reviews h2 { font-size: 32px; margin-bottom: 40px; }
        .review-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }
        .review-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .review-card img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 38px; }
          .hero p { font-size: 16px; }
          .trending-card img, .category-card img { height: 180px; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Rent. Swap. Repeat.</h1>
          <p>Discover and rent stylish outfits for every occasion. Affordable, sustainable, and trendy fashion.</p>
          <button className="btn-primary">Browse Collection</button>
          <button className="btn-secondary">How It Works</button>
        </div>
      </section>

      {/* TRENDING RENTALS */}
      <section className="trending">
        <h2>Trending Rentals</h2>
        <div className="trending-grid">
          <div className="trending-card">
            <img src={trending1} alt="Elegant Evening Gown" />
            <div className="price">₹1,200/day</div>
          </div>
          <div className="trending-card">
            <img src={trending2} alt="Dapper Suit" />
            <div className="price">₹950/day</div>
          </div>
          <div className="trending-card">
            <img src={trending3} alt="Chic Casual Dress" />
            <div className="price">₹700/day</div>
          </div>
          <div className="trending-card">
            <img src={trending4} alt="Traditional Sherwani" />
            <div className="price">₹1,500/day</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>01 Browse & Select</h3>
            <p>Choose from a wide range of styles.</p>
          </div>
          <div className="step">
            <h3>02 Book Your Dates</h3>
            <p>Select your rental period & sizes.</p>
          </div>
          <div className="step">
            <h3>03 Wear & Return</h3>
            <p>Enjoy your outfit & return it easily.</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src={category1} alt="Formal Wear" />
            <h3>Formal Attire</h3>
          </div>
          <div className="category-card">
            <img src={category2} alt="Party Outfits" />
            <h3>Party Outfits</h3>
          </div>
          <div className="category-card">
            <img src={category3} alt="Casual Wear" />
            <h3>Casual Wear</h3>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review-cards">
          <div className="review-card">
            <img src={user1} alt="Customer 1" />
            <p>"Amazing outfits for my wedding! Highly recommend StyleSwap."</p>
            <strong>- Sarah K.</strong>
          </div>
          <div className="review-card">
            <img src={user2} alt="Customer 2" />
            <p>"Great service and trendy clothes. Loved the experience."</p>
            <strong>- Arjun M.</strong>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
