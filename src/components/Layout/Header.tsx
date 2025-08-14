import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavigationProps } from '../../types';

interface HeaderProps extends NavigationProps {}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, user }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo">
            Pawfect Match
          </Link>
        </div>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/breeds" 
            className={`nav-link ${isActive('/breeds') ? 'active' : ''}`}
          >
            Breeds
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/care-guides" 
            className={`nav-link ${isActive('/care-guides') ? 'active' : ''}`}
          >
            Care Guides
          </Link>
          
          {isAuthenticated ? (
            <div className="nav" style={{gap: '1rem'}}>
              <Link 
                to="/dashboard" 
                className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
              >
                Dashboard
              </Link>
              <Link 
                to="/profile" 
                className="btn-secondary"
                style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}
              >
                {user?.email || 'Profile'}
              </Link>
            </div>
          ) : (
            <div className="nav" style={{gap: '0.75rem'}}>
              <Link 
                to="/login" 
                className="nav-link"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="btn-secondary"
                style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;