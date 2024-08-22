import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const loaction =  useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>;
    }

    if(user){
        return children;
    }
    return  <Navigate state={loaction.pathname} to="/log"></Navigate>
};

export default PrivateRoute;