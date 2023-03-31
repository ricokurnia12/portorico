import React, { useState } from 'react';
import Bglogin from '../Assets/bglogin.png';
import baseUrl from '../baseUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import baseDirectory from '../baseDirectory';
import NavbarLogin from '../Component/NavbarLogin';
import { useForm } from 'react-hook-form';

import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const handleLogin = async (data) => {
    console.log(data);
    try {
      await axios.post(`${baseUrl}/login`, {
        email: data.email,
        password: data.password,
      });
      navigate(`/${baseDirectory}/dashboard`);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(error.response.data.msg);
      }
    }
  };
  return (
    <div
      style={{
        overflowY: 'hidden',
        height: '100vh',
      }}
    >
      <NavbarLogin />
      <div className="bg-login container-fluid vh-100 d-flex justify-content-center position-relative ">
        <div
          className="container p-5 "
          style={{
            overflowY: 'hidden',
          }}
        >
          <div className="row">
            <div className="row mb-4">
              <h2>Welcome to My Website ,</h2>
              <p
                style={{
                  fontWeight: '500',
                }}
              >
                Good to see you again! Please enter your login details
                to proceed.
              </p>
            </div>
            <div className="col-12 col-sm-5 order-2 order-sm-1">
              <form onSubmit={handleSubmit(handleLogin)}>
                {msg && <span>{msg}</span>}
                <div className="mb-3">
                  <label className="mb-1">
                    <h3>Login Details</h3>
                    email
                  </label>
                  <input
                    type="email"
                    placeholder="insert your email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register('email')}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="mb-1">password</label>
                  <input
                    placeholder="insert your password"
                    type="password"
                    className="form-control"
                    {...register('password')}
                  />
                  <div className="form-text float-end mt-2">
                    Forgot Password ?
                  </div>
                </div>

                <button type="submit" className="btn-login mt-4">
                  Submit
                </button>
                <div
                  id="emailHelp"
                  className="form-text text-center mt-2"
                >
                  Dont Have account ?{' '}
                  <span
                    style={{
                      color: '#0099FF',
                    }}
                  >
                    Register Here
                  </span>
                </div>
              </form>
            </div>
            <div className="col-12 col-sm-7 text-center order-1 order-sm-2 mb-5 d-flex align-items-start justify-content-center">
              <img
                src={Bglogin}
                style={{
                  marginBottom: '120px',
                  width: '90%',
                  maxWidth: '600px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
