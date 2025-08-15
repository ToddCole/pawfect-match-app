import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky-header">
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="Pawfect Match Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/breeds">Breeds</Link>
            <ul className="dropdown">
              <li><Link to="/breeds/popular">Popular Breeds</Link></li>
              <li><Link to="/breeds/rare">Rare Breeds</Link></li>
            </ul>
          </li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;