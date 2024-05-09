import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import {motion} from "framer-motion"
const Navbar = () => {

  return (
    <motion.header
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1, duration:1}}
    className="h-16 fixed w-full bg-white z-[999]">
      <nav className=" w-full h-full flex justify-between items-center max-w-[1230px] px-5 mx-auto">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <Button>
            <NavLink to={"/login"}>Login</NavLink>
          </Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
