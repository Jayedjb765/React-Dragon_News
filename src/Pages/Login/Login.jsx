import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {Loogin} =  useContext(AuthContext);
    const location =  useLocation();
    const navigate =  useNavigate();
    const HandelLogin =  e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email  =  form.get('email');
        const password =  form.get('password');
        Loogin(email,password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.log(error.message);
        })
       


    

    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <h3 className="text-3xl font-bold text-center" >Login Now</h3>
        <form className="w-3/4 lg:w-1/2  mx-auto " onSubmit={HandelLogin}>
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <h3 className="text-xl text-center ">Don't have any acoount ? <Link className="text-red-500" to="/regi">Register Now</Link></h3>
      </div>
    </div>
  );
};

export default Login;
