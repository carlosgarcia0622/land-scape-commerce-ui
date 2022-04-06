import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item)=>{
        const itemFromCart = cart.find(i => i.id ===item.id)
        if(!itemFromCart){
            setCart([...cart, item]);
        }else{
            itemFromCart.amount += item.amount
            setCart(cart)
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

    const deleteItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }

    const totalCart = () => {
        return cart.reduce((acc, prod) => acc + prod.amount * prod.price, 0)
    }

    const quantityCart = () => {
    return cart.reduce((acc, prod) => acc + prod.amount, 0)
    }


  return (
    <CartContext.Provider value={{
        cart,
        addItem,
        isInCart,
        removeItem,
        clear,
        deleteItem,
        totalCart,
        quantityCart
    }}>
        {children}
    </CartContext.Provider>
  )
}