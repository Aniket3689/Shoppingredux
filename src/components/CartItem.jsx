import { MdDelete } from "react-icons/md";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"
import { toast } from "react-hot-toast";
const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const  removeFronCart=()=>{
         dispatch((remove(item.id)));
         toast.success("Item remove")
  }
  return <div>
     <div>
      <div>
        <img src={item.image}/>
      </div>
      <div>
       <h1> {item.title}</h1>
      </div>
      <div>
        <h1>{item.description}</h1>
      </div>
       <div>
        {item.price}
       </div>
       <div>
        <button 
        
        onClick={removeFronCart}>
            <MdDelete />
        </button>
       </div>
     </div>

  </div>;
};

export default CartItem;
