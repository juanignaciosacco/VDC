import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import logo from '../../assets/logoVidrios.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../cartWidget/CartWidget';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} className='logo' alt='Logo'/>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"><FontAwesomeIcon icon={faBarsStaggered} /></i>
      </button>
      {isMenuOpen ? (
        <ul className="navbar-menu open">
          <li className="navbar-item" onClick={toggleMenu}><Link to={'/'}>Home</Link></li>
          <li className="navbar-item" onClick={toggleMenu}><Link to={'/productos'}>Productos</Link></li>
          <li className="navbar-item" onClick={toggleMenu}><Link to={'/contacto'}>Contacto</Link></li>
          <li className="navbar-item" onClick={toggleMenu}><Link to={'/cart'}><CartWidget /></Link></li>
        </ul>
      ):(
        <ul className="navbar-menu">
          <li className="navbar-item"><Link to={'/'}>Home</Link></li>
          <li className="navbar-item"><Link to={'/productos'}>Productos</Link></li>
          <li className="navbar-item"><Link to={'/contacto'}>Contacto</Link></li>
          <li className="navbar-item"><Link to={'/cart'}><CartWidget /></Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
