import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navbarHeight = 70; // height of navbar
  const sidebarWidth = sidebarOpen ? 230 : 60;

  const menuItems = [
    { label: "Profile", path: "/profile" },
    { label: "Home", path: "/" },
    { label: "Analytics", path: "/dashboard" },
    { label: "Orders", path: "/orders" },
    { label: "Products", path: "/products" },
    { label: "Users", path: "/users" },
    { label: "Settings", path: "/settings" },
    { label: "WishList", path: "/wishlist" },
    { label: "Cart", path: "/cart" },
    { label: "Product History", path: "/product-history" },
    { label: "Booked Order", path: "/booked-order" },
    { label: "Stock Register", path: "/stock-register" },
    { label: "Salesman", path: "/salesman" },
    { label: "Return", path: "/return" },
    { label: "Deposite", path: "/deposite" },
    { label: "Sales", path: "/sales" },
    { label: "Booking", path: "/booking" },
    { label: "Income", path: "/income" },
  ];

  return (
    <>
      <style>{`
        .sidebar {
          position: fixed;
          top: ${navbarHeight}px;
          left: 0;
          width: ${sidebarWidth}px;
          height: calc(100vh - ${navbarHeight}px);
          background: #fff;
          overflow-y: auto;
          transition: 0.3s;
          box-shadow: 2px 0 5px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        .toggle {
          padding: 15px;
          background: #f8f9fa;
          text-align: center;
          cursor: pointer;
          font-weight: bold;
        }
        .item {
          padding: 15px 20px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          transition: 0.2s;
        }
        .item:hover { background:#2563eb; color:#fff; }
        .item span { display:${sidebarOpen ? "inline" : "none"}; }

        /* Dashboard cards */
        .dash-card {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(77, 10, 145, 0.1);
          text-align: center;
          cursor: pointer;
          transition: 0.3s;
        }
        .dash-card:hover {
          background: #2563eb;
          color: #fff;
        }
        .dash-card h3 {
          margin: 0 0 10px 0;
          color: #000206;
        }
        .dash-card p {
          margin: 0;
          font-size: 14px;
          color: #4b5563;
        }
        .dash-card:hover p {
          color: #e5e7eb;
        }
      `}</style>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? "Collapse" : "☰"}
        </div>
        {menuItems.map((m, i) => (
          <div key={i} className="item" onClick={() => navigate(m.path)}>
            <span>{m.label}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div
        style={{
          marginLeft: sidebarWidth,
          marginTop: navbarHeight,
          padding: "20px",
          minHeight: `calc(100vh - ${navbarHeight}px)`,
          background: "#f4f6f8",
          overflowY: "auto",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {menuItems.map((card, idx) => (
            <div
              key={idx}
              className="dash-card"
              onClick={() => navigate(card.path)} // click navigates to path
            >
              <h3>{card.label}</h3>
              <p>Manage {card.label.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
