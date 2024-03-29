import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { books } from '../category/fiction';
import CartItems from './CartItems';
import { Link } from 'react-router-dom';
import '../styles.css';
import axios from 'axios';

const Cart = () => {
  const { cartItems, getTotalAmt } = useContext(CartContext);
  const TotalAmt = getTotalAmt();
  const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);

  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:3000/create-checkout-session', {
        cartItems: cartItems 
      });
      window.location = response.data.url; 
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return(
    <div className='category'>
    <div className='genre'>
      <div className='cart'>
        {books.map((book) => {
          if (cartItems[book.id] !== 0){
            return <CartItems data={book}/>;
          }
          return null;
        })}
      {isCartEmpty ? (
            <p>Your cart is empty. </p>
          ) : (
            <div className='checkout'>
              <p>Total: {TotalAmt}</p>
              <Link to="/category">
                <button>Continue Shopping</button>
              </Link>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
          )}
      </div>
    </div>
    </div>
  )
}

export default Cart;

