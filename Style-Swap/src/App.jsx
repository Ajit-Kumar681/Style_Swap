import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Western from "./pages/Western";
import Ethnic from "./pages/Ethnic";
import Accessories from "./pages/Accessories";
import Mens from "./pages/Mens";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [wishlist, setWishlist] = useState([]);

  // Function to toggle wishlist items
  const toggleWishlist = (item) => {
    setWishlist((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <BrowserRouter>
        <Sidebar wishlistCount={wishlist.length} />

        <div style={{ marginLeft: "220px", transition: "0.3s" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/western" element={<Western toggleWishlist={toggleWishlist} wishlist={wishlist}/>} />
            <Route path="/ethnic" element={<Ethnic toggleWishlist={toggleWishlist} wishlist={wishlist}/>} />
            <Route path="/accessories" element={<Accessories toggleWishlist={toggleWishlist} wishlist={wishlist}/>} />
            <Route path="/mens" element={<Mens toggleWishlist={toggleWishlist} wishlist={wishlist}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
