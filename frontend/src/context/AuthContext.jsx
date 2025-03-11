import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    // Optionally initialize from localStorage if available
    const localData = localStorage.getItem("authData");
    if (localData) {
      console.log(
        "AuthContext: Loaded authData from localStorage:",
        JSON.parse(localData)
      );
      return JSON.parse(localData);
    }
    return null;
  });

  const login = (data) => {
    // Ensure that data.user.isAdmin exists
    const auth = { token: data.token, ...data.user };
    // console.log("AuthContext: Logging in with data:", auth);
    setAuthData(auth);
    localStorage.setItem("authData", JSON.stringify(auth));
  };

  // const logout = () => {
  //   // console.log("AuthContext: Logging out, clearing authData");
  //   setAuthData(null);
  //   localStorage.removeItem("authData");
  //   navigate("/"); // Redirect to home after logout
  // // };

  // const logout = () => {
  //   localStorage.removeItem("authData");
  //   setAuthData(null);
  //   window.location.href = "/"; // Force redirect to home
  // };

  // const logout = () => {
  //   localStorage.removeItem("authData");
  //   setAuthData(null);
  // };

  // const logout = () => {
  //   localStorage.removeItem("authData");

  //   // Delay state update to prevent flicker
  //   setTimeout(() => {
  //     setAuthData(null);
  //   }, 100); // Small delay to allow UI transition
  // };

  const logout = () => {
    if (!authData) return; // Prevent redundant state updates

    localStorage.removeItem("authData");
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
