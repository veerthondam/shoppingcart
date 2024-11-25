import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link to="/" className="navbar-brand">
        Veer
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/login" className="btn btn-outline-primary me-2">
          Login
        </Link>
        <Link to="/signup" className="btn btn-outline-success">
          Sign Up
        </Link>
      </div>
    </header>
  );
}
