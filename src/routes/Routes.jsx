import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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