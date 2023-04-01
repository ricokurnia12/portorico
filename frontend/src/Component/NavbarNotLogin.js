import React from 'react';
import baseDirectory from '../baseDirectory';
import { useNavigate } from 'react-router-dom';

const NavbarNotLogin = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar "
      style={{
        backgroundColor: '#0099FF',
        opacity: '0.8',
      }}
    >
      <div className="container">
        <a className="navbar-brand text-light" href="#">
          Your Logo
        </a>
        <button
          onClick={() => navigate(`/${baseDirectory}/login`)}
          className="btn navbar-brand text-light"
        >
          login
        </button>
      </div>
    </nav>
  );
};

export default NavbarNotLogin;
