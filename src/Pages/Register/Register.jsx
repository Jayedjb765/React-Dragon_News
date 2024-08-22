import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {
    const HandelRegister  =  e =>{
        e.preventDefault();
        const form  =  new FormData(e.currentTarget);
        const name =  form.get('name');
        const photo =  form.get('photo');
        const email =  form.get('email');
        const password =  form.get('password');
        console.log(email,name,password,photo);
    }
    return (
        <div>
        <Navbar></Navbar>
        <div className="">
          <h3 className="text-3xl font-bold text-center" >Login Now</h3>
          <form className="w-3/4 lg:w-1/2  mx-auto " onSubmit={HandelRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <h3 className="text-xl text-center ">Already have an acoount ? <Link className="text-blue-500" to="/log">Login Now</Link></h3>
        </div>
      </div>
    );
};

export default Register;