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
    <div>
       {
        cart.length> 0 ? 
        (
        <div>
          <div>
              {cart.map((item, index) => {
                return <CartItem key={index.id} item={item} itemIndex={index} />;
              })}
            </div>
            <div>
                <div>
                  <div> Your cart</div>
                  <div>Summary</div>
                  <p>
                    <span>Total Item {cart.length}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Total amount :${totalAmount}
                  </p>
                  <button>

                  </button>
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
