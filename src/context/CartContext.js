import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item)=>{
        if(!isInCart(item.id)){
            setCart([...cart, item]);
        }
    }

    const removeItem = (id) => {
        setCart(
            cart.filter((item) => item.id !== id)
            );
    }

    const clear = () => setCart([]);

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }
  return (
    <CartContext.Provider value={{
        cart,
        addItem,
        isInCart,
        removeItem,
        clear
    }}>
        {children}
    </CartContext.Provider>
  )
}