import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  return user && user.isAdmin ? children : <Navigate to="/login" />;
};

export default AdminRoute;
