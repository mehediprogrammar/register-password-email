import { Outlet } from "react-router-dom";
import NavBer from "../Component/NavBer/NavBer";


const Main = () => {
    return (
        <div className=" max-w-[1200px] mx-auto " >
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;