
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        .navbar {
          position: fixed; top: 0; width: 100%; background: #fff;
          border-bottom: 1px solid #e5e7eb; z-index: 1000;
        }
        .nav-container { max-width: 1280px; margin:auto; padding:16px 24px;
          display:flex; justify-content:space-between; align-items:center;
        }
        .logo { font-size:22px; font-weight:700; cursor:pointer; }
        .logo span { color:#2563eb; }
        .nav-links { display:flex; gap:24px; }
        .nav-links span { cursor:pointer; font-weight:600; position:relative; }
        .nav-links span::after {
          content:""; position:absolute; left:0; bottom:-6px; width:0; height:2px; background:#111; transition:.3s;
        }
        .nav-links span:hover::after { width:100%; }
        .auth-buttons { display:flex; gap:12px; }
        button { padding:8px 16px; border-radius:6px; cursor:pointer; font-size:13px; }
        .login-btn { border:1px solid #111; background:transparent; }
        .signup-btn { background:#111; color:white; border:none; }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={()=>navigate("/")}>Style<span>Swap</span></div>

          <div className="nav-links">
            <span onClick={()=>navigate("/western")}>WESTERN</span>
            <span onClick={()=>navigate("/ethnic")}>ETHNIC</span>
            <span onClick={()=>navigate("/accessories")}>ACCESSORIES</span>
            <span onClick={()=>navigate("/mens")}>MEN&apos;S COLLECTION</span>
          </div>

          <div className="auth-buttons">
            <button className="login-btn" onClick={()=>navigate("/login")}>Login</button>
            <button className="signup-btn" onClick={()=>navigate("/signup")}>Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
