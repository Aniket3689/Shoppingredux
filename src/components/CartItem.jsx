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
  return <div >
     <div className="flex flex-col border-b-4 border-amber-950">
      <div className="h-[160px] w-[200px]">
        <img src={item.image} className="h-full w-full"/>
      </div>
      <div className="text-gray-400">
       <h1> {item.title}</h1>
      </div>
      <div className="text-slate-700 font-semibold ">
        <h1>{item.description.split(" ").slice(0,11).join(" ")+" "}</h1>
      </div>
      <div className="flex justify-between ">
       <div className="text-green-700 font-bold">
        ${item.price}
       </div>
       <div>
        <button 
           className="font-bold "
        onClick={removeFronCart}>
            <MdDelete />
        </button>
       </div>
      </div>
     </div>

  </div>;
};

export default CartItem;
