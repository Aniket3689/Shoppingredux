import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  return <div>
       <div className="flex flex-row justify-between">
          <NavLink to="/">
            <div className="ml-5">
              <img src="../logo.png" alt=""className="h-14" />
            </div>
          </NavLink>
          <NavLink to="/">
            <div>
             <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div >
                < FaCartArrowDown className="h-14"/>
            </div>
          </NavLink>
       </div>
  </div>;
};

export default Navbar;
