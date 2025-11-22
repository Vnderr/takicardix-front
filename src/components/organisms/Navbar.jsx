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

  // Separar links
  const leftLinks = links.filter(
    (link) => !['Iniciar sesión', 'Registrarse', 'Carrito'].includes(link.label)
  );
  const rightLinks = links.filter(
    (link) => ['Iniciar sesión', 'Registrarse', 'Carrito'].includes(link.label)
  );

  return (
    <nav className="navbar shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 navbar-container">
        {/* Título */}
        <h1 className="navbar-title">{title}</h1>

        {/* Links izquierda */}
        <div className="navbar-section navbar-left">
          {leftLinks.map((link, i) => (
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

        {/* Links derecha */}
        <div className="navbar-section navbar-right">
          {rightLinks.map((link, i) => (
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
    </nav>
  );
}

export default Navbar;
