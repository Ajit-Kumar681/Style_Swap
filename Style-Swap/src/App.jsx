import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Western from "./pages/Western";
import Ethnic from "./pages/Ethnic";
import Accessories from "./pages/Accessories";
import Mens from "./pages/Mens";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart"; // ✅ NEW

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]); // ✅ CART STATE
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  /* Wishlist toggle */
  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev.filter((i) => i.id !== item.id);
      return [...prev, item];
    });
  };

  /* ✅ Cart toggle */
  const toggleCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev.filter((i) => i.id !== item.id);
      return [...prev, item];
    });
  };

  const NAVBAR_HEIGHT = 70;
  const SIDEBAR_WIDTH = 220;

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Sidebar
          wishlistCount={wishlist.length}
          cartCount={cart.length}   // ✅ OPTIONAL (badge ke liye)
          user={user}
          style={{
            position: "fixed",
            top: `${NAVBAR_HEIGHT}px`,
            left: 0,
            width: `${SIDEBAR_WIDTH}px`,
            height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          }}
        />

        <div
          style={{
            marginTop: `${NAVBAR_HEIGHT}px`,
            marginLeft: `${SIDEBAR_WIDTH}px`,
            padding: "20px",
            minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
            background: darkMode ? "#1a1a1a" : "#f4f6f8",
            transition: "0.3s",
          }}
        >
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />

            <Route
              path="/western"
              element={
                <Western
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  cart={cart}
                  toggleCart={toggleCart}
                  darkMode={darkMode}
                />
              }
            />

            <Route
              path="/ethnic"
              element={
                <Ethnic
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  cart={cart}
                  toggleCart={toggleCart}
                  darkMode={darkMode}
                />
              }
            />

            <Route
              path="/accessories"
              element={
                <Accessories
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  cart={cart}
                  toggleCart={toggleCart}
                  darkMode={darkMode}
                />
              }
            />

            <Route
              path="/mens"
              element={
                <Mens
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  cart={cart}
                  toggleCart={toggleCart}
                  darkMode={darkMode}
                />
              }
            />

            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  darkMode={darkMode}
                />
              }
            />

            {/* ✅ CART PAGE */}
            <Route
              path="/cart"
              element={<Cart cart={cart} toggleCart={toggleCart} />}
            />

            {/* Auth */}
            <Route path="/login" element={<Login setUser={setUser} darkMode={darkMode} />} />
            <Route path="/signup" element={<Signup setUser={setUser} darkMode={darkMode} />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard user={user} darkMode={darkMode} />} />
            <Route path="/profile" element={<Profile user={user} darkMode={darkMode} />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
