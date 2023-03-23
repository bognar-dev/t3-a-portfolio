import React, { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Product, CartItem } from '../utils/types';

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: CartItem) => void;
}

const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const item: CartItem = { ...product, uuid: uuidv4() }; // Generate unique id using a library like uuidv4
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (product: CartItem) => {
    setCartItems(cartItems.filter((item) => item.uuid !== product.uuid));
  };

  const contextValue: CartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

export { CartProvider, useCart};
