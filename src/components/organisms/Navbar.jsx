<nav className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-bold tracking-wider text-red-500">
          {title}
        </h1>
      </div>

      {/* Links desktop */}
      <div className="hidden md:flex space-x-8">
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            onClick={(e) => handleLinkClick(e, link)}
            className={({ isActive }) =>
              `relative px-3 py-2 text-lg font-medium transition-all duration-300
               ${isActive ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}
               after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-500
               after:transition-all after:duration-300 hover:after:w-full`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Botón menú móvil */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </div>
  </div>

  {/* Links móvil */}
  {isOpen && (
    <div className="md:hidden bg-gray-900 px-4 py-3 space-y-2">
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.to}
          onClick={(e) => handleLinkClick(e, link)}
          className="block text-gray-300 hover:text-red-400 transition"
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  )}
</nav>
