const Product = ({post}) => {
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
    
    <button>
      {
        true?<p>remove Item</p>:<p>Add Cart</p>
      }
    </button>
    
  </div>;
};

export default Product;
