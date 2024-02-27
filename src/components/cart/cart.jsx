import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { books } from '../category/fiction';
import CartItems from './CartItems';
import { Link } from 'react-router-dom';
import '../styles.css';

const Cart = () => {
  const { cartItems, getTotalAmt } = useContext(CartContext);
  const TotalAmt = getTotalAmt();
  const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);
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
              <Link to="/checkout">
                <button>Checkout</button>
              </Link>
            </div>
          )}
      </div>
    </div>
    </div>
  )
}

export default Cart;

