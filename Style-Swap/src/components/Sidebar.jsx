import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ wishlistCount = 0, cartCount = 0 }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [userRole, setUserRole] = useState("user"); // "admin" or "user"

  // Menu items
  const menuItems =
    userRole === "admin"
      ? [
          { label: "Dashboard", path: "/" },
          { label: "Orders", path: "/orders" },
          { label: "Users", path: "/users" },
          { label: "Products", path: "/western" },
          { label: "Support", path: "/support" },
          { label: "Profile", path: "/profile" },
        ]
      : [
          { label: "Home", path: "/" },
          { label: "Western", path: "/western" },
          { label: "Ethnic", path: "/ethnic" },
          { label: "Accessories", path: "/accessories" },
          { label: "Men's Collection", path: "/mens" },
          { label: "Wishlist", path: "/wishlist", badge: wishlistCount },
          { label: "Cart", path: "/cart", badge: cartCount },
          { label: "Orders", path: "/orders" },
          { label: "Profile", path: "/profile" },
          { label: "Login", path: "/login" },
          { label: "Sign Up", path: "/signup" },
          { label: "Support", path: "/support" },
        ];

  return (
    <>
      <style>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: ${open ? "240px" : "60px"};
          background: #111;
          color: white;
          display: flex;
          flex-direction: column;
          z-index: 1001;
          transition: 0.3s;
          box-shadow: 2px 0 8px rgba(0,0,0,0.2);
          font-family: "Segoe UI", sans-serif;
        }
        .toggle-btn {
          padding: 12px;
          cursor: pointer;
          text-align: center;
          background: #1f2937;
          user-select: none;
          font-weight: bold;
        }
        .menu-item {
          padding: 16px 20px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          transition: 0.2s;
        }
        .menu-item:hover { background: #2563eb; }
        .menu-item span { display: ${open ? "inline" : "none"}; }
        .badge {
          background: red;
          color: white;
          font-size: 12px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media(max-width:768px){
          .sidebar { width: ${open ? "180px" : "0"}; }
          .menu-item span { display: ${open ? "inline" : "none"}; }
        }
      `}</style>

      <div className="sidebar">
        <div className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? "Collapse" : "Expand"}
        </div>

        {menuItems.map((item, i) => (
          <div key={i} className="menu-item" onClick={() => navigate(item.path)}>
            <span>{item.label}</span>
            {item.badge !== undefined && <div className="badge">{item.badge}</div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
