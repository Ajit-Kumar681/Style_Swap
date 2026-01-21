import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import e1 from "../assets/images/img7.jpg";
import e2 from "../assets/images/img8.jpg";
import e3 from "../assets/images/img9.jpg";
import e4 from "../assets/images/img10.jpg";

const data = [
  { id: "e1", title: "Ethnic Saree", image: e1, category: "Ethnic" },
  { id: "e2", title: "Traditional Lehenga", image: e2, category: "Ethnic" },
  { id: "e3", title: "Kurti Set", image: e3, category: "Ethnic" },
  { id: "e4", title: "Wedding Wear", image: e4, category: "Ethnic" },
];

const Ethnic = ({ wishlist, toggleWishlist, cart, toggleCart }) => {
  return (
    <>
      <Navbar />

      <style>{`
        *{box-sizing:border-box;font-family:Segoe UI,sans-serif}

        .page{padding:120px 30px 60px;background:#f8fafc;min-height:100vh;}
        .title{text-align:center;font-size:36px;margin-bottom:45px;font-weight:600;color:#0f172a;}

        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:30px;max-width:1300px;margin:auto;}
        .card{position:relative;height:380px;border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 12px 30px rgba(0,0,0,.15);transition:.3s;}
        .card:hover{transform:translateY(-8px);}

        .card img{width:100%;height:100%;object-fit:cover;}

        .icons{
          position:absolute;
          top:14px;
          right:14px;
          display:flex;
          gap:10px;
          z-index:2;
        }

        .icon{
          width:38px;
          height:38px;
          background:#fff;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:18px;
          cursor:pointer;
          transition:.3s;
          box-shadow:0 4px 12px rgba(0,0,0,.2);
        }

        .icon.active{background:#fee2e2;transform:scale(1.1);}
        .cart.active{background:#dcfce7;}

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

        .card:hover .overlay{opacity:1;}

        .view-btn{
          padding:12px 28px;
          background:#2563eb;
          color:#fff;
          border:none;
          border-radius:8px;
          font-size:15px;
          cursor:pointer;
        }

        .info{
          position:absolute;
          bottom:14px;
          left:14px;
          color:#0f172a;
          font-weight:600;
          font-size:16px;
          background:rgba(255,255,255,.9);
          padding:4px 8px;
          border-radius:6px;
        }
      `}</style>

      <div className="page">
        <h1 className="title">Ethnic Collection</h1>

        <div className="grid">
          {data.map((item) => {
            const inWishlist = wishlist.find((i) => i.id === item.id);
            const inCart = cart.find((i) => i.id === item.id);

            return (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} />

                {/* Wishlist + Cart (same as Western) */}
                <div className="icons">
                  <div
                    className={`icon ${inWishlist ? "active" : ""}`}
                    onClick={() => toggleWishlist(item)}
                    title="Wishlist"
                  >
                    {inWishlist ? "❤️" : "🤍"}
                  </div>

                  <div
                    className={`icon cart ${inCart ? "active" : ""}`}
                    onClick={() => toggleCart(item)}
                    title="Cart"
                  >
                    {inCart ? "🛒" : "➕"}
                  </div>
                </div>

                <div className="overlay">
                  <button className="view-btn">View</button>
                </div>

                <div className="info">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ethnic;
