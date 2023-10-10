import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HeroRegister from "../page/HeroRegister/HeroRegister";
import Home from "../page/Home/Home";
import Register from "../page/Register/Register";

const myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/heroRegister",
                element:<HeroRegister></HeroRegister>
            }
        ]
    }
])

export default myRoutes;