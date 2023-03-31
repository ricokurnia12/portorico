import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../page/Login';
import Register from '../page/Register';

const AdminRoute = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
};

export default AdminRoute;
