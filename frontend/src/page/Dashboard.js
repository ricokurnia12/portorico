import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import baseUrl from '../baseUrl';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/token`);
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      console.log('oioi', decoded);
      setName(decoded.name);
    } catch (error) {
      console.log('oioio', error.data);
    }
  };
  return <div>Halo : {name}</div>;
};

export default Dashboard;
