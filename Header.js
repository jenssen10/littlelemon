// src/components/Header.jsx
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Little Lemon Logo" />

      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
