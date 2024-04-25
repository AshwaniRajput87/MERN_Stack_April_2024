
import { useCart } from "../../context/cart/useCart";
import "./addToCart.css";

const AddToCart = ({product}) => {

  const { cart, addToCart, removeFromCart } = useCart();

  const itemInCart = cart[product.id];
  const quantity = itemInCart ? itemInCart.quantity : 0;

  console.log(cart);
  return (
    <div className="add-to-cart">
      {
        itemInCart ? (
          <>
            <div onClick={()=>{removeFromCart(product.id)}} className="add remove">
              -
            </div>
            <div className="quantity">{quantity}</div>
            <div onClick={()=>{addToCart(product)}} className="add">
              +
            </div>
          </>
        ): (
          <button onClick={()=>{addToCart(product)}} className="add">
            Add to Cart
          </button>
        ) 
      }
    </div>
  );
}

export default AddToCart;
