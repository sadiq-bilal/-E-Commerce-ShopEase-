import React from 'react'
import { Link } from "react-router-dom";

function OrderPlaced() {
  return (
    <div className='order-placed'>
        <div className="tick-icon">
           ✓   
      </div>
      <h1>Order Placed Successfully!</h1>

      <p>Thank you for shopping with us.</p>
      <p>Your order has been placed and will be processed soon or later.</p>

      <Link to={"/products"}><button>Continue Shopping</button></Link>
    </div>
  )
}

export default OrderPlaced
