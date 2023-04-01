import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import baseUrl from '../baseUrl';
import baseDirectory from '../baseDirectory';
import { useNavigate } from 'react-router-dom';
import NavbarLogin from '../Component/NavbarLogin';
import TableUsers from '../Component/Admin/TableUsers';
import SidebarAdmin from '../Component/Admin/SidebarAdmin';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [listUsers, setListUsers] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  console.log('ini users', listUsers);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${baseUrl}/token`);
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);

      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate(`/${baseDirectory}/login`);
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(`${baseUrl}/token`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);

        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  const getUsers = async () => {
    const response = await axiosJWT.get(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    setListUsers(response.data);
  };

  return (
    <>
      <SidebarAdmin>
        <NavbarLogin name={name} />
        <div className="container-fluid ">
          {' '}
          <div>Halo : {name}</div>;
          <button className="btn btn-danger" onClick={getUsers}>
            Refresh Tabel
          </button>
          <TableUsers />
        </div>
      </SidebarAdmin>
    </>
  );
};

export default Dashboard;
