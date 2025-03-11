// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const AdminHeader = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login"); // Redirects to login page
//   };

//   return (
//     <header className="admin-header p-3 bg-dark text-white">
//       <div className="container d-flex justify-content-between align-items-center">
//         <h2>Admin Dashboard</h2>
//         <nav>
//           <Link to="/admin-panel/users" className="text-white me-3">
//             Users
//           </Link>
//           <Link to="/admin-panel/orders" className="text-white me-3">
//             Orders
//           </Link>
//           <Link to="/admin-panel/products" className="text-white me-3">
//             Products
//           </Link>
//           <button
//             onClick={handleLogout}
//             className="btn btn-sm btn-outline-light"
//           >
//             Logout
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default AdminHeader;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const AdminHeader = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <header className="admin-header p-3 bg-dark text-white">
//       <div className="container d-flex justify-content-between align-items-center">
//         <h2>Admin Dashboard</h2>
//         <nav>
//           <Link to="/admin-panel/users" className="text-white me-3">
//             Users
//           </Link>
//           <Link to="/admin-panel/orders" className="text-white me-3">
//             Orders
//           </Link>
//           <Link to="/admin-panel/products" className="text-white me-3">
//             Products
//           </Link>
//           <Link to="/admin-panel/add-product" className="text-white me-3">
//             Add Product
//           </Link>
//           <button
//             onClick={handleLogout}
//             className="btn btn-sm btn-outline-light"
//           >
//             Logout
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default AdminHeader;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirects to login page
  };

  return (
    <header className="admin-header p-3 bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center">
        <h2>Admin Dashboard</h2>
        <nav>
          <Link to="/admin-panel/users" className="text-white me-3">
            Users
          </Link>
          <Link to="/admin-panel/orders" className="text-white me-3">
            Orders
          </Link>
          <Link to="/admin-panel/products" className="text-white me-3">
            Products
          </Link>
          <Link to="/admin-panel/add-product" className="text-white me-3">
            Add Product
          </Link>
          <button
            onClick={handleLogout}
            className="btn btn-sm btn-outline-light"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
