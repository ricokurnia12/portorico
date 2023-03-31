import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Directory from '../baseDirectory';
import Dashboard from '../page/Dashboard';
import Login from '../page/Login';
import Register from '../page/Register';

const Router = () => {
  return (
    <Routes>
      <Route path={`/${Directory}/login`} element={<Login />} />
      <Route path={`/${Directory}/register`} element={<Register />} />
      <Route
        path={`/${Directory}/dashboard`}
        element={<Dashboard />}
      />
    </Routes>
  );
};

export default Router;
