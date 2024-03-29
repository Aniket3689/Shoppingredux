import { useEffect, useState } from "react";
import Product from "../components/Product"
import Spinner from "../components/Spinner"

const Home = () => {
  const [loding,setLoding]=useState(false);
   const [posts,setPosts]=useState([]);
  const API_URL = "https://fakestoreapi.com/products";
    async function fetchProductData (){
         setLoding(true);
         try {
            const res=await fetch(API_URL);
            const data =await res.json();
            setPosts(data);
         } catch (error) {
            console.log("Error aagaya hai");
            setPosts([]);
         }
         setLoding(false);
    }
    useEffect(()=>{
           fetchProductData();
    },[])
  return (
    <div>
      {
        loding ? <Spinner/>: 
        posts.length > 0 ?
        ( <div>
          {
             posts.map((post)=>(
              <Product key={post.id} post={post}/>
           ))
          }
        </div>):
        <div>
        
        <p> No data found </p>
        </div>
      }
    </div>
  )
};

export default Home;
