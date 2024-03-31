import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div >
       {
        
        cart.length> 0 ? 
        (
    
        <div className=" flex justify-between items-center">
          <div className=" grid  xs:gridcols-1  max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {cart.map((item, index) => {
                return <CartItem key={index.id} item={item} itemIndex={index} />;
              })}
        </div>
        <div  className="" >
          <div>
                  <div className="text-slate-500"> Your cart</div>
                  <div>Summary</div>
                  <p>
                    <span >Total Item {cart.length}</span>
                  </p>
                </div>
                <div >
                  <p className=" outline  rounded-full items-center p-3
                     hover:bg-slate-700 font-bold transation duration-300 ease-in
                     hover:text-white
                  ">
                    Total amount :${totalAmount}
                  </p>
             
                </div>

          </div>
            
      </div>
        ):
        (<div> 
            <h1> Cart is empty</h1>
            <Link to="/">
              <button>
                Shop Now
              </button>
            </Link>
      </div>)
    
       }
    </div>
  )
};

export default Cart;
