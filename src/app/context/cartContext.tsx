'use client'
import { createContext, ReactElement, ReactNode, useContext, useReducer } from "react";
import { CartItems } from "../types";

const CartContext = createContext({});

export function CartProvider({
  initCart,
  children
}: {
  initCart: CartItems
  children: ReactElement
}) {
  const [cart, dispatch] = useReducer(cartReducer, initCart);

  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext);
};

function cartReducer(cart, action) {
  switch(action.type) {
    case 'add': {
      return [...cart, action.newItem]
    }
    default: {
      return []
    }
  }
  
}