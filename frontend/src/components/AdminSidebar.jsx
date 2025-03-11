// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const AdminSidebar = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login"); // Redirects to login page
//   };

//   return (
//     <div className="admin-sidebar">
//       <h2 className="brand">Admin Panel</h2>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/admin-panel/users">Users</Link>
//           </li>
//           <li>
//             <Link to="/admin-panel/orders">Orders</Link>
//           </li>
//           <li>
//             <Link to="/admin-panel/products">Products</Link>
//           </li>
//           <li>
//             <button onClick={handleLogout} className="logout-btn">
//               Logout
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default AdminSidebar;
