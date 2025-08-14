import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavigationProps } from '../../types';

interface HeaderProps extends NavigationProps {}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, user }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="text-white p-4 fixed w-full top-0 z-50 shadow-lg" style={{background: 'linear-gradient(135deg, #E6454A 0%, #312032 100%)'}}>
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-2xl font-bold text-white hover:text-gray-100 transition-colors">
            Pawfect Match
          </Link>
        </div>
        
        <div className="nav-links flex gap-6 items-center">
          <Link 
            to="/" 
            className={`text-white hover:text-gray-100 transition-colors ${isActive('/') ? 'font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/breeds" 
            className={`text-white hover:text-gray-100 transition-colors ${isActive('/breeds') ? 'font-bold' : ''}`}
          >
            Breeds
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-gray-100 transition-colors ${isActive('/about') ? 'font-bold' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/care-guides" 
            className={`text-white hover:text-gray-100 transition-colors ${isActive('/care-guides') ? 'font-bold' : ''}`}
          >
            Care Guides
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link 
                to="/dashboard" 
                className={`text-white hover:text-gray-100 transition-colors ${isActive('/dashboard') ? 'font-bold' : ''}`}
              >
                Dashboard
              </Link>
              <Link 
                to="/profile" 
                className="bg-white px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                style={{color: '#312032'}}
              >
                {user?.email || 'Profile'}
              </Link>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link 
                to="/login" 
                className="text-white hover:text-gray-100 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-white px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                style={{color: '#312032'}}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;