// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("isAdmin");
//     localStorage.removeItem("user");

//     navigate("/"); // Redirect to login page after logout
//   };

//   return <button onClick={handleLogout}>Logout</button>;
// };

// export default Logout;

import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
