// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const PrivateRoute = ({ children }) => {
//   const { authData } = useAuth();
//   return authData?.token ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
