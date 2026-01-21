import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, toggleCart }) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <style>{`
        * { box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }

        .page {
          padding: 120px 30px 60px;
          background: linear-gradient(135deg,#f8fafc,#eef2ff);
          min-height: 100vh;
        }

        .title-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
        }

        .title {
          font-size: 38px;
          font-weight: 700;
          color: #0f172a;
        }

        .badge {
          background: #ef4444;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
          max-width: 1300px;
          margin: auto;
        }

        .card {
          position: relative;
          height: 390px;
          border-radius: 22px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 20px 45px rgba(0,0,0,.15);
          transition: .35s;
        }

        .card:hover { transform: translateY(-12px) scale(1.02); }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .4s;
        }

        .card:hover img { transform: scale(1.08); }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          opacity: 0;
          transition: .35s;
        }

        .card:hover .overlay { opacity: 1; }

        .buy-btn, .view-btn {
          padding: 12px 28px;
          border: none;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          color: #fff;
          transition: 0.3s;
        }

        .buy-btn {
          background: #16a34a;
          box-shadow: 0 8px 18px rgba(22,163,74,.4);
        }

        .buy-btn:hover { background: #15803d; transform: scale(1.05); }

        .view-btn {
          background: #2563eb;
          box-shadow: 0 8px 18px rgba(37,99,235,.4);
        }

        .view-btn:hover { background: #1d4ed8; transform: scale(1.05); }

        .info {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(255,255,255,0.92);
          padding: 10px 12px;
          border-radius: 12px;
          font-weight: 600;
          color: #0f172a;
          backdrop-filter: blur(8px);
        }

        .remove {
          position: absolute;
          top: 14px;
          right: 14px;
          padding: 7px 14px;
          background: #ef4444;
          color: #fff;
          border: none;
          border-radius: 20px;
          font-size: 13px;
          cursor: pointer;
          box-shadow: 0 8px 18px rgba(239,68,68,.4);
          transition: .3s;
          z-index: 2;
        }

        .remove:hover { background: #dc2626; transform: scale(1.05); }

        .empty {
          text-align: center;
          font-size: 18px;
          color: #64748b;
          margin-top: 80px;
        }

        @media(max-width:768px){
          .card { height: 320px; }
          .title { font-size: 28px; }
        }
      `}</style>

      <div className="page">
        <div className="title-container">
          <h1 className="title">My Cart 🛒</h1>
          {cart.length > 0 && <div className="badge">{cart.length}</div>}
        </div>

        {cart.length === 0 ? (
          <div className="empty">
            🛍️ Cart is empty <br />
            <small>Add items to your cart</small>
          </div>
        ) : (
          <div className="grid">
            {cart.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} />

                <button className="remove" onClick={() => toggleCart(item)}>
                  Remove
                </button>

                <div className="overlay">
                  <button className="buy-btn">Buy Now</button>
                  <button className="view-btn" onClick={() => navigate(`/product/${item.id}`)}>
                    View
                  </button>
                  
                </div>

                <div className="info">
                  {item.title} <br />
                  <small>({item.category})</small>
                </div>
              </div>
              
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
