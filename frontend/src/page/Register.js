import React, { useEffec, useState } from 'react';
import { useForm } from 'react-hook-form';
import Bglogin from '../Assets/bglogin.png';
import NavbarLogin from '../Component/NavbarLogin';
import './Login.css';
import axios from 'axios';
import baseUrl from '../baseUrl';
import baseDirectory from '../baseDirectory';
import { useNavigate } from 'react-router-dom';
import NavbarNotLogin from '../Component/NavbarNotLogin';

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });
  const [msg, setMsg] = useState(false);

  const handleRegister = async (data) => {
    console.log(data, data.name);
    try {
      await axios.post(`${baseUrl}/users`, {
        name: data.name,
        email: data.email,
        password: data.password,
        confPassword: data.confPassword,
      });
      navigate(`/${baseDirectory}/login`);
    } catch (error) {
      if (error.response) {
        setMsg(true);
        console.log(error.response.data);
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
      <NavbarNotLogin />
      <div className="container-fluid vh-100 d-flex justify-content-center position-relative ">
        <div
          className="container p-5 "
          style={{
            overflowY: 'hidden',
          }}
        >
          <form
            className="row"
            onSubmit={handleSubmit(handleRegister)}
          >
            <div className="mb-3 col-12 col-md-6">
              <label className="mb-2">Name</label>
              <input
                type="text"
                placeholder="insert your name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                {...register('name')}
              />
            </div>
            <div className=" col-12 col-md-6">
              <label className="mb-2">Email</label>
              <input
                placeholder="insert your email"
                type="email"
                className="form-control"
                {...register('email')}
              />
            </div>
            <div className=" col-12 col-md-6">
              <label className="mb-2">Password</label>
              <input
                type="password"
                placeholder="insert your email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                {...register('password')}
              />
            </div>
            <div className=" col-12 col-md-6">
              <label className="mb-2">Confirm Password</label>
              <input
                placeholder="Confirm your password"
                type="password"
                className="form-control"
                {...register('confPassword')}
              />
              {msg && (
                <span className="text-danger">
                  Password did't match
                </span>
              )}
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
      </div>
    </div>
  );
};

export default Register;
