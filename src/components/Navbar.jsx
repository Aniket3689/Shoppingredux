import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  return <div>
       <div className="flex flex-row justify-between">
          <NavLink to="/">
            <div>
              <img src="https://tse2.mm.bing.net/th?id=OIP.5xNlP2wgT1S8yOulmw0HZgAAAA&pid=Api&P=0&h=180" alt="" />
            </div>
          </NavLink>
          <NavLink to="/">
            <div>
             <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div>
                < FaCartArrowDown/>
            </div>
          </NavLink>
       </div>
  </div>;
};

export default Navbar;
