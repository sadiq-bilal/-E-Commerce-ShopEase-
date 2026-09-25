import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useCart } from "../Context/CartContext";

function Cart() {
  const { cart, cartTotal, Shipping, totalPrice } = useCart();
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>The Cart is Empty</h2>
        <Link to="/products">⬅ Continue Shopping </Link>
      </div>
    );
  }
  return (
    <div className="cart-page">
      <Link to="/products">⬅ Continue Shopping </Link>
      <h1>Shopping Cart</h1>
      <div className="cart-layout">
        <div className="cart-products">
          <div className="cart-heading">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>

        <div className="order-summary">
          <h1>Order Summary</h1>
          <div>
            <span>Subtotal</span>
            <span>{cartTotal}</span>
          </div>
          <div>
            <span>Shipping</span>

            <span>${Shipping}</span>
          </div>

          <div className="total">
            <span>Total</span>
            <span>{totalPrice}</span>
          </div>

          <Link to={"/checkout"}>
            <button className="checkout-btn">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
