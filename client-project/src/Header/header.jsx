// src/components/Header/Header.jsx
import { useState } from 'react';
import { useRef } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo1">RioGram</Link>

        {/* Mobile Menu Toggle */}
        <button className="icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <div className={`menu ${menuOpen ? 'show' : ''}`} id="menuItems">
          {/* Services Dropdown */}
          <div className="dropdown">
            <button 
              className="nav_1" 
              onClick={() => toggleDropdown('services')}
            >
              Services &#9662;
            </button>
            <div className={`dropdown-content ${openDropdown === 'services' ? 'show-dropdown' : ''}`}>
              <NavLink to="/services/paid-promotion" onClick={() => setMenuOpen(false)}>Paid Promotion</NavLink>
              
              {/* Free Product Suits */}
              <div className="dropdown">
                <button onClick={() => toggleDropdown('freeProducts')}>
                  Free Product Suits &#9656;
                </button>
                <div className={`dropdown-content ${openDropdown === 'freeProducts' ? 'show-dropdown' : ''}`}>
                  <NavLink to="/services/free-product-suits/free-demo" onClick={() => setMenuOpen(false)}>Free Demo</NavLink>
                  <NavLink to="/services/free-product-suits/trial-subscriptions" onClick={() => setMenuOpen(false)}>Trial Subscriptions</NavLink>
                  <NavLink to="/services/free-product-suits/membership" onClick={() => setMenuOpen(false)}>Membership</NavLink>
                </div>
              </div>
              
              {/* Add other dropdowns similarly */}
            </div>
          </div>
          
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div 
          id="overlay" 
          onClick={() => setMenuOpen(false)}
          style={{ display: menuOpen ? 'block' : 'none' }}
        />
      )}
    </header>
  );
};

export default Header;