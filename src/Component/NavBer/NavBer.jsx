import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBer = () => {
  return (
    <div className="flex justify-between items-center shadow-lg px-5 py-4 ">
        <Logo></Logo>
      <nav className="flex justify-center items-center gap-10">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-600 underline text-xl font-semibold " : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-600 underline text-xl font-semibold " : ""
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/heroRegister"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-600 underline text-xl font-semibold " : ""
          }
        >
          HeroRegister
        </NavLink>
        
      </nav>
    </div>
  );
};

export default NavBer;
