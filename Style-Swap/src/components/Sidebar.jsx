import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ wishlistCount = 0, user }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const NAVBAR_HEIGHT = 70; // same as in App

  const userRole = user?.role || "user"; // dynamic user role
  const menuItems =
    userRole === "admin"
      ? [
          { label: "Dashboard", path: "/" },
          { label: "Users", path: "/users" },
          { label: "Products", path: "/western" },
          { label: "Orders", path: "/orders" },
        ]
      : [
          { label: "Home", path: "/" },
          { label: "Western", path: "/western" },
          { label: "Ethnic", path: "/ethnic" },
          { label: "Accessories", path: "/accessories" },
          { label: "Men's Collection", path: "/mens" },
          { label: "Wishlist", path: "/wishlist", badge: wishlistCount },
          { label: "Dashboard", path: "/dashboard" },
          { label: "Profile", path: "/profile" },
          { label: "Cart", path: "/cart" },
        ];

  return (
    <>
      <style>{`
        .sidebar {
          position: fixed;
          left: 0;
          top: ${NAVBAR_HEIGHT}px; /* start below navbar */
          height: calc(100vh - ${NAVBAR_HEIGHT}px);
          width: ${open ? "230px" : "60px"};
          background: #e3eaec;
          color: #0c0578;
          transition: 0.3s;
          z-index: 999;
          overflow: hidden;
          box-shadow: 2px 0 6px rgba(244, 246, 247, 0.1);
        }
        .toggle {
          padding: 15px;
          background: #ebf2f5;
          cursor: pointer;
          text-align: center;
          font-weight: bold;
          color: #0d0202;
          border-bottom: 1px solid #01040a;
        }
        .item {
          padding: 15px 20px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 500;
          transition: 0.2s;
        }
        .item:hover {
          background: #2563eb;
        }
        .item span {
          display: ${open ? "inline" : "none"};
        }
        .badge {
          background: red;
          border-radius: 50%;
          font-size: 12px;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
      `}</style>

      <div className="sidebar">
        <div className="toggle" onClick={() => setOpen(!open)}>
          {open ? "Collapse" : "☰"}
        </div>

        {menuItems.map((m, i) => (
          <div key={i} className="item" onClick={() => navigate(m.path)}>
            <span>{m.label}</span>
            {m.badge > 0 && <div className="badge">{m.badge}</div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
