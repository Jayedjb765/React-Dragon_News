import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";

const route =  createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path: "/news/:id",
                element:<PrivateRoute><News></News> </PrivateRoute>                       


            },
            {
                path: "/log",
                element: <Login></Login>
            },
            {
                path: "/regi",
                element: <Register></Register>
            }
        ]
    }
])
export default route;