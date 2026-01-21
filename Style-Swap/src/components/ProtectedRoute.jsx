import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  // Agar user logged in nahi hai to login page pe redirect kar do
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Agar user logged in hai to requested page dikhado
  return children;
};

export default ProtectedRoute;
