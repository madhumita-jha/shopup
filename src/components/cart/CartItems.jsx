import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItems = (props) => {
    const { id, image, title, author, price } = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItem} = useContext(CartContext);
    
    return (
        <div>
            <div className='cartItems'>
                <img src={image} alt={title} height={150} />
                <div className="fiction">
                    <p>{title}</p>
                    <h6>By {author}</h6>
                    <p>Price: <span>&#8377;{price}</span></p>
                    <div className='count'>
                        <button onClick={() => removeFromCart(id)}>-</button>
                        <input value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value),id)}/>
                        <button onClick={() => addToCart(id)}>+</button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default CartItems;