import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 shadow fixed-top">
      <div className="container-fluid d-flex justify-content-between">
        <Link to="/login" className="navbar-brand fw-bold fs-4">
          {/* <h2 className="logo1 text-primary">E-Commerce App</h2> */}
          <img
            src="/myntra_logo.webp"
            alt="Amazon Logo"
            className="amazon-logo"
          />
        </Link>
        <Link
          to="/register"
          className="btn btn-info text-white fw-bold px-4 py-2"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavbar;
