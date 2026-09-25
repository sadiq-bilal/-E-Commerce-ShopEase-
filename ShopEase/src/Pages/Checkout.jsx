import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const { cart, totalPrice, clearCart} = useCart(); // ₹
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/orderplaced");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <h2>Shipping Information</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required={true} />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Address</label>
          <input type="text" placeholder="Enter your address" required />
          <div className="contact-info">
            <span>
              <label>City</label>
              <input type="text" placeholder="Enter city" required/>
            </span>
            <span>
              <label>Mobile Number</label>
              <input type="text" placeholder="Enter phone number" maxLength="10"  pattern="\d{10}" inputmode="numeric"  required  />
            </span>
          </div>
          <button type="submit" >Place Order</button>
        </form>
      </div>

      <div className="checkout-summary">
        <h2>Order Summary</h2>

        <div className="checkout-products-list">
          {cart.map((product) => (
            <div className="checkout-product" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div>
                <div className="product-naming">
                  <h4>{product.name}</h4>
                </div>

                <div className="product-pricing">
                  <p>
                    ₹{product.price} × {product.quantity}
                  </p>
                  <p>₹{product.price * product.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="total-amount">
          <h2>Total</h2>
          <h3>₹{totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
