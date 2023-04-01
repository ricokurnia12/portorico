import axios from 'axios';
import baseUrl from '../baseUrl';
import baseDirectory from '../baseDirectory';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarLogin = (props) => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.delete(`${baseUrl}/logout`);
      navigate(`/${baseDirectory}/login`);
    } catch (error) {}
  };

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
        <div className="d-flex">
          {' '}
          <a className=" navbar-brand text-light ">{props.name}</a>
          <a onClick={logout} className="btn navbar-brand text-light">
            logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;
