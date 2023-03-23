import { useContext } from "react";
import { useCart } from "../context/CartProvider";
import classes from '../styles/Cart.module.scss'
const ShoppingCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  if(cartItems.length === 0){
    return <>
    No Items in your Cart
    </>
  }
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {cartItems.map((item) => (
          <li key={item.id} className={classes.item}>
            <div className={classes.itemInfo}>
              <h2 className={classes.itemName}>{item.name}</h2>
              <p className={classes.itemPrice}>{item.price}</p>
            </div>
            <button className={classes.itemButton} 
            onClick={() => removeFromCart(item)}>Remove</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;