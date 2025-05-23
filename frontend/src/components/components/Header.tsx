import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../img/Logo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-content">
        <div className="title">
        <img src={logo} alt="Logo" className="logo" />
        <span className="brand-name">SpringerCash</span>
      </div>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="sidebar-menu">
          <ul>
            <li><Link to="/Ayuda">Ayuda</Link></li>
            <li><Link to="/Tips">Tips de Ahorro</Link></li>
            <li><Link to="/Nosotros">Nosotros</Link></li>
            <li><Link to="/MisionVision">Misión y Visión</Link></li>
            <li><span>Cerrar sesión</span></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;