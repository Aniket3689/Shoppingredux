import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {cart} =useSelector((state)=>state);
  return <div>
       <div className="flex  justify-between items-center h-20 max-w-6xl mx-auto">
          <NavLink to="/">
            <div className="ml-5">
              <img src="../logo.png" alt=""className="h-14" />
            </div>
          </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 ">
          <NavLink to="/">
            <div>
             <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div  className="relative">
                < FaCartArrowDown className="text-2xl"/>
                {
                  cart.length > 0 &&
                  <span
                    className="absolute  left-1 -top-1 bg-green-600 text-xs w-5  h-5
                     flex justify-center items-center animate-bounce rounded-full text-white "
                  >{cart.length}</span>
                }
               
            </div>
          </NavLink>
        </div>
       </div>
  </div>;
};

export default Navbar;
