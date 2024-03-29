import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {add,remove} from "../redux/Slices/CartSlice"
const Product = ({post}) => {
  const cart=useSelector((state)=>state)
    console.log(cart);
  const dispatch =useDispatch();

  const AddToItem =() =>{
        dispatch (add(post));
        toast.success("Add item success cart")
  }
  const removeFromItem =()=>{
    dispatch(remove(post.id));
    toast.success("remove item from cart")
  }

  return <div>
    <div>
      <p>{post.title}</p>
    </div>
    <div>
      <p>{post.description}</p>
    </div>
    <div>
        <img src={post.image} alt="" />
    </div>
    
     <div>
     {
        [cart]?.some((p)=>p.id===post.id)?
       (<button
          onClick={removeFromItem}
       >
        Remove item
       </button>):(
        <button onClick={AddToItem}> 
          Add item
       </button>)
       
     }
     </div>
    
  </div>;
};

export default Product;
