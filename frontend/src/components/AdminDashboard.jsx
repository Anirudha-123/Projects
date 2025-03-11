// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import AdminUsers from "./AdminUsers";
// import AdminOrders from "./AdminOrders";
// import AdminProducts from "./AdminProducts";

// const AdminDashboard = () => {
//   return (
//     <div className="container my-4">
//       <Routes>
//         {/* Default to Users view */}
//         <Route path="/" element={<Navigate to="users" replace />} />
//         <Route path="users" element={<AdminUsers />} />
//         <Route path="orders" element={<AdminOrders />} />
//         <Route path="products" element={<AdminProducts />} />
//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="users" replace />} />
//       </Routes>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminUsers from "./AdminUsers";
import AdminOrders from "./AdminOrders";
import AdminProducts from "./AdminProducts";

const AdminDashboard = () => {
  return (
    <div className="container my-4">
      <Routes>
        <Route path="/" element={<Navigate to="users" replace />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="*" element={<Navigate to="users" replace />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
