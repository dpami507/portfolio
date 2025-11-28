import { NavLink } from "react-router-dom";
import { useState } from 'react';
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav id="navbar">
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={isOpen ? 'active' : ''}>
        <li>
          <NavLink to="/" className="navitem" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="navitem" onClick={closeMenu}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/art" className="navitem" onClick={closeMenu}>
            Art
          </NavLink>
        </li>
        <li className="contact-item">
          <NavLink to="/contact" className="navitem" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;