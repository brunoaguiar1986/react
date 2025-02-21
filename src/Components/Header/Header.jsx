import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiWhatsappLine } from 'react-icons/ri';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo-container">
        <h2 className='titulo-Lugar'>Corpo e Cia</h2>
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li>
            <NavLink 
              to="/" 
              exact 
              activeClassName="active"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/aulas" 
              activeClassName="active"
              onClick={closeMenu}
            >
              Aulas
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/professores" 
              activeClassName="active"
              onClick={closeMenu}
            >
              Professores
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/horario-localizacao" 
              activeClassName="active"
              onClick={closeMenu}
            >
              Horário/Localização
            </NavLink>
          </li>
          <li>
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
              onClick={closeMenu}
            >
              <RiWhatsappLine /> WhatsApp
            </a>
          </li>
        </ul>
      </nav>

      <button 
        className={`hamburger ${menuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </header>
  );
};

export default Header;
