import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import baseUrl from '../baseUrl';
import baseDirectory from '../baseDirectory';
import { useNavigate } from 'react-router-dom';
import NavbarLogin from '../Component/NavbarLogin';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${baseUrl}/token`);
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      console.log('oioi', decoded);
      setName(decoded.name);
    } catch (error) {
      console.log('oioio', error.data);
      if (error.response) {
        navigate(`/${baseDirectory}/login`);
      }
    }
  };
  return (
    <>
      <NavbarLogin name={name} />
      <div>Halo : {name}</div>;
      <button onClick={getUsers} className="btn btn-primary mt-5">
        get users
      </button>
    </>
  );
};

export default Dashboard;
