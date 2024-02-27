import React, { createContext, useState } from 'react';
import { books } from '../category/fiction';

export const CartContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i=1; i<=books.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const getTotalAmt = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = books.find((book)=>book.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    };
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };
    const updateCartItem = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    };
    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItem, getTotalAmt };

    console.log(cartItems);
    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};
