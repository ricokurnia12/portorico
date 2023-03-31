import React from 'react';

const NavbarLogin = () => {
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
        <a className="navbar-brand text-light" href="#">
          Login
        </a>
      </div>
    </nav>
  );
};

export default NavbarLogin;
