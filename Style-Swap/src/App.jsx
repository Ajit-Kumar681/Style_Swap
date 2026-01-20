import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Western from "./pages/Western";
import Ethnic from "./pages/Ethnic";
import Accessories from "./pages/Accessories";
import Mens from "./pages/Mens";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/western" element={<Western />} />
          <Route path="/ethnic" element={<Ethnic />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
