import React, { useContext} from 'react';
import { CartContext } from '../cart/CartContext';

const Book = (props) => {

  const { id, image, title, author, price } = props.data;
  const {addToCart, cartItems} = useContext(CartContext);
  
  const cartItemAmount = cartItems[id];
  return (
    <div className='card1'>
      <img src={image} alt={title} height={150} />
      <div className="fiction">
        <p>{title}</p>
        <h6>By {author}</h6>
        <p>Price: <span>&#8377;{price}</span></p>
        
          <button onClick={() => addToCart(id)}>
            Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
          </button>
        
      </div>
    </div>
  );
};

export default Book;

// const { addToCart } = useCart();
  // const [addedToCart, setAddedToCart] = useState(false);

  // const handleAddToCart = () => {
  //     addToCart({ id, image, title, author, price });
  //     setAddedToCart(true);
  // };
  /* {addedToCart ? (
          <Link to="/cart" className="no-underline">
            <button>Go to Cart</button>
          </Link>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )} */
        // import { Link } from 'react-router-dom';
// import { useCart } from '../cart/CartContext';