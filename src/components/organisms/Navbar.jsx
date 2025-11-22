import React from 'react';
import { NavLink } from 'react-router-dom';
import { publicLinks } from '../../data/NavbarUser';
import '../../styles/navbar.css';

function Navbar({ title }) {
  const leftLinks = publicLinks.filter((link) =>
    ['Inicio', 'Productos', 'Contacto', 'Nosotros', 'Perfil', 'Mis Compras'].includes(link.label)
  );
  const rightLinks = publicLinks.filter(
    (link) => ['Iniciar sesión', 'Registrar', '🛒 Carrito'].includes(link.label)
  );

  return (
    <nav className="navbar shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-container">
          <h1 className="navbar-title">{title}</h1>

          <div className="navbar-left">
            {leftLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.to}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? 'active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="navbar-right">
            {rightLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.to}
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
