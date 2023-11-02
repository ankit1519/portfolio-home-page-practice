import React, { useState } from 'react';
import './NavBar.css'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Profile</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}

export default Navbar;
