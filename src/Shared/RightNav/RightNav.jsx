import React, { useContext } from "react";
import { RiGoogleLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { PiFacebookLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import { AuthContext } from "../../Providers/AuthProvider";

const RightNav = () => {
  const {popupgoogle,popupgit} = useContext(AuthContext);
  const googlepop = () =>{
    popupgoogle()
    .then(result =>{
      console.log(result.user);
  })
  .catch(error =>{
      console.log(error.message);
  })
  }
  const gitpopu = () => {
    popupgit()
    .then(result =>{
      console.log(result.user);
  })
  .catch(error =>{
      console.log(error.message);
  })
  }
  return (
    <div>
      <div className="p-2  space-y-3 mb-8">
        <h3 className="text-2xl font-semibold">Log With</h3>
        <button onClick={googlepop} className="btn btn-outline w-full text-blue-500">
          <RiGoogleLine></RiGoogleLine> Login with Google
        </button>
        <button onClick={gitpopu} className="btn btn-outline w-full">
          <SiGithub></SiGithub> Login with Github
        </button>
      </div>
      <div className="p-2  ">
        <h3 className="text-2xl font-semibold ">Find Us On</h3>
        <a className="flex border rounded-t-lg p-2" href="">
        <PiFacebookLogoLight className="mt-1  mr-2 text-blue-500  "></PiFacebookLogoLight> <span>Facebook</span>
        </a>
        <a className=" flex border-x p-2 " href="">
        <FaTwitter className="mt-1 mr-2 text-blue-500"></FaTwitter> <span>Twitter</span>
        </a>
        <a className=" flex border rounded-b-lg p-2" href="">
        <FaInstagram className="mt-1 mr-2 text-rose-400 rounded-b-lg border"></FaInstagram> <span>Instagram</span>
        </a>
       
      </div>
      <div className="p-2  space-y-3 mt-8">
        <h3 className="text-2xl font-semibold">Q-zone</h3>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
        
      </div>
    </div>
  );
};

export default RightNav;
