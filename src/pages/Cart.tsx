import classes from '../styles/Cart.module.scss'
import { api } from "~/utils/api";
function ShoppingCart() {
  const  {data} = api.products.getCart.useQuery({user:"1",})
  if(data?.cartItems.length === 0){
    return (
      <div className={classes.container}>
        <ul className={classes.list}>
            <li className={classes.item}>
              No Items in your Cart
            </li>
        </ul>
        <div>Total: <p></p></div>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {data?.cartItems.map((item: any) => (
          <li key={item.id} className={classes.item}>
            <div className={classes.itemInfo}>
              <h2 className={classes.itemName}>{item.product.name}</h2>
              <p className={classes.itemPrice}>{item.product.price + ' '+item.product.currency}</p>
            </div>
            <button className={classes.itemButton} 
            onClick={()=>{}}>Remove</button>
          </li>
        ))}
      </ul>
      <div>Total: <p></p></div>
    </div>
  );
};

export default ShoppingCart;