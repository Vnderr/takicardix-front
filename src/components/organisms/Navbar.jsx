import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../styles/navbar.css';


function Navbar({ links, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    setIsOpen(false);
  };

  const handleLinkClick = (e, link) => {
    if (link.label === 'Salir') {
      e.preventDefault();
      handleLogout();
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Título */}
          <div className="flex-shrink-0">
            <h1 className="navbar-title">{title}</h1>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex space-x-8">
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.to}
                onClick={(e) => handleLinkClick(e, link)}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? 'active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
