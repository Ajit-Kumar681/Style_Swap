import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import m1 from "../assets/images/img5.jpg";
import m2 from "../assets/images/img4.jpg";
import m3 from "../assets/images/img7.jpg";
import m4 from "../assets/images/img10.jpg";

const Mens = () => {
  // ✅ Wishlist state for each card
  const [liked, setLiked] = useState([false, false, false, false]);

  // ✅ Toggle wishlist heart
  const toggleLike = (index) => {
    const updated = [...liked];
    updated[index] = !updated[index];
    setLiked(updated);
  };

  return (
    <>
      <Navbar />

      <style>{`
        *{box-sizing:border-box;font-family:Segoe UI,sans-serif}

        .page{
          padding:120px 30px 60px;
          background:#f8fafc;
          min-height:100vh;
        }

        .title{
          text-align:center;
          font-size:36px;
          margin-bottom:45px;
          font-weight:600;
          color:#0f172a;
        }

        .card-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:30px;
          max-width:1300px;
          margin:auto;
        }

        .card{
          position:relative;
          height:380px;
          border-radius:18px;
          overflow:hidden;
          background:#fff;
          box-shadow:0 12px 30px rgba(0,0,0,.15);
          transition:.3s;
        }

        .card:hover{transform:translateY(-8px)}

        .img-box{
          width:100%;
          height:100%;
          overflow:hidden;
        }

        .img-box img{
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center top;
          display:block;
        }

        .wishlist{
          position:absolute;
          top:14px;
          right:14px;
          width:38px;
          height:38px;
          background:#fff;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:20px;
          cursor:pointer;
          z-index:2;
          transition:.3s;
        }

        /* ✅ Active wishlist state */
        .wishlist.active{
          background:#fee2e2;
          transform:scale(1.1);
        }

        .overlay{
          position:absolute;
          inset:0;
          background:rgba(0,0,0,.55);
          display:flex;
          align-items:center;
          justify-content:center;
          opacity:0;
          transition:.3s;
        }

        /* ✅ Show View button on hover */
        .card:hover .overlay{opacity:1}

        .view-btn{
          padding:12px 28px;
          background:#2563eb;
          color:#fff;
          border:none;
          border-radius:8px;
          font-size:15px;
          cursor:pointer;
        }

        @media(max-width:768px){
          .card{height:320px}
          .title{font-size:28px}
        }
      `}</style>

      <div className="page">
        <h1 className="title">Men's Collection</h1>

        <div className="card-grid">
          {[m1, m2, m3, m4].map((img, i) => (
            <div className="card" key={i}>
              <div className="img-box">
                <img src={img} alt={`Men's ${i + 1}`} />
              </div>

              {/* ✅ Clickable wishlist */}
              <div
                className={`wishlist ${liked[i] ? "active" : ""}`}
                onClick={() => toggleLike(i)}
              >
                {liked[i] ? "❤️" : "🤍"}
              </div>

              {/* ✅ Overlay View button */}
              <div className="overlay">
                <button className="view-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Mens;
